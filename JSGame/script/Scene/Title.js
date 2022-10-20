/**シーンオブジェクト　タイトル*/
class Title extends IScene {
    /**constructor*/
    constructor(){
        super();
        /**@type {number} シーン開始時間*/
        this.startTime = 0;

        /**@type {number} 所有しているクラスインスタンスに訪れた回数*/
        this.visitsNum = 0;
    }//constructor

    /**シーンの変更の条件を満たしたか調べる
     * @param {number} time - シーンの経過時間*/
    CheckChangeScene(time){
        if(Date.now() > (1000 + this.startTime) && window.isKeyDown.key_Enter == true){
            this.bgm.pause();
            SceneManager.Use('Game');
            this.startTime = 0;
        }
    }//CheckChangeScene

    /**アクターを構築*/
    GenerateActorAtSceneStart(){
        ActorManager.actors = [];
    }//GenerateActorAtSceneStart

    /**テキストを描画する*/
    DrawText(){
        App.Utils[window.canvasID[0]].DrawText(
            '3D Game',
            (App.Canvas_Width/2) - 245, 
            (App.Canvas_Height/2) + 5,
            'rgba(255, 255, 255, 0.6)',
            60
        );
    }//DrawText
    
    //-----------------------override method------------------//
    /**初期化　オーバーライド*/
    Initialize(){
        this.visitsNum++;
        this.GenerateActorAtSceneStart();
        gradationValue = 0;
        this.startTime = Date.now();
    }//Initialize

    /**更新　オーバーライド*/
    Update(time){
        this.CheckChangeScene(time);
    }//Update
    
    /**描画　オーバーライド*/
    Render(){        
        this.DrawText();
    }//Render

    /**終了処理　オーバーライド*/
    Finalize(){}//Finalize
}//class Title