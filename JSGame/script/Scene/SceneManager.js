/**マネージャーはシングルトンなのでクラスでは作らない*/ 
const SceneManager = {
    /**@type {IScene[]} シーンの実体配列*/
    scene       : { Object },

    /**@type {IScene} 使用中のシーン*/
    activeScene : null,

    /**@type {number} シーンの開始時間*/
    startTime   : null,

    /**@type {number} フレーム数*/
    frame       : null,

    /**@type {number} シーンの経過時間*/
    activeTime  : null,

    /**@type {number} 一フレーム前の時間*/
    oldFrameTime: null,

    /**@type {number} 一フレームの秒数*/
    frameTime   : null,

    /**シーンを追加
     * @param { string } name - シーンの名前
     * @param { string } Scene - クラスの型名*/ 
    Add:function(name){
        let objectType = GetClass(name);
        this.scene[name] = new objectType();
        //this.scene[name].Initialize();
    },//App

    /**実行するシーンの設定
     * @param { string } name - シーンの名前*/ 
    Use:function(name){
        if(this.scene.hasOwnProperty(name) !== true) return;
        //if(this.activeScene !== null) this.activeScene.Finalize();

        this.frame = 0;
        this.startTime = Date.now();
        this.activeScene = this.scene[name];
        this.activeScene.Initialize();
    },//Use

    /**初期化*/
    Initialize:function(){
        this.frame = 0;
        this.startTime = 0;
        scene = [null];
        activeScene = [null];
    },//Initialize

    /**シーンの更新*/
    Update:function(){
        this.oldFrameTime = Date.now();
        this.activeTime = (this.oldFrameTime - this.startTime) / 1000;
        this.activeScene.Update(this.activeTime);
        ++this.frame;
    },//Update

    /**シーンの描画*/
    Render:function(){
        this.activeScene.Render();
        this.frameTime = Date.now() - this.oldFrameTime;
    }//Render
}//SceneManage