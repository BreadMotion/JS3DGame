/**動きを付与する空のオブジェクト*/
class Actor{
    /**@return {boolean} 更新許可フラグを取得*/
    get IsUpdate(){
        return this.isUpdate;
    }//IsUpdate

    /**constructor
     * @param {number} x - X座標
     * @param {number} y - Y座標
     * @param {number} angle - 角度*/
    constructor(x,y,angle){
        /**@type {boolean} 更新許可フラグ*/
        this.isUpdate = false;

        /**@type {IComponent} コンポーネント格納配列*/
        this.components = [];

        //アクターの最低限持つべきコンポーネントを追加する
        this.AddComponent('TransformComponent', x, y, angle);
    }//Constructor

    /**初期化*/
    Initialize(){
        for(let obj of this.components){ obj.Initialize(); }
    }//Initialize

    /**事後初期化*/
    PostInitialize(){
        for(let obj of this.components){ obj.PostInitialize(); }
    }//PostInitialize

    /**更新*/
    Update(){
        for(let obj of this.components) {var newobj = obj.Update(); }
    }//Update

    /**事後更新*/
    PostUpdate(){
        for(let obj of this.components) { obj.PostUpdate();}
    }//PostUpdate

//----------------------------------------------------------------------------//
    /**コンポーネント生成、追加
     * @param {string} object - 生成コンポーネントの型名文字列
     * @param {...} args - objectのコンストラクタ引数 
     * @return {IComponent} 生成したコンポーネント*/
    AddComponent(object,...args){
        let objectType = GetClass(object);
        let newObject = new objectType(this, args);
        if(this.components.includes(element=> element.id === newObject.id)){
            return null;
        }

        this.components.push(newObject);
        return newObject;
    }//AddComponent

    /**コンポーネント削除
     * @param {string} object - コンポーネントの型名文字列*/
    RemoveComponent(object){
        this.components.splice(element=>element.id === object);
    }//RemoveComponent

    /**コンポーネントの取得
     * @param {string} object - コンポーネントの型名文字列
     * @return {IComponent | undefined} 指定したコンポーネントの参照値*/
    GetComponent(object){
        return this.components.find(element=>element.id === object);
    }//GetComponent
//----------------------------------------------------------------------------//
}//class Actor

/**アクターを生成
  * @param {number} x - X座標
  * @param {number} y - Y座標
  * @param {number} angle - 角度*/
function CreateActor(x,y,angle){
    return new Actor(x,y,angle);
}//function CreateActor

/**キャラクターコンポーネント付きアクターを生成
 * @param {number} x - 生成座標X
 * @param {number} y - 生成座標Y
 * @param {number} angle - 生成角度
 * @param {String} key - アプリケーションデータのキー
 * @param {CanvasRenderingContext2D} context - キャンバスコンテキスト
 * @param {number} drawPrimary - 描画優先順位
 * @param {boolean} canRot - 回転可能か*/
function CreateActorHaveCharactor(x,y,angle,key,context,drawPrimary,canRot=true){
    const data = AppData[key];
    var actor = new Actor(x,y,angle);
    
    actor.AddComponent(
        'CharactorComponent',context,
        data.imageWidth, data.imageHeight,
        data.scaleX,data.scaleY,
        data.imagePath, 
        (drawPrimary != undefined ? drawPrimary:data.drawPrimary), canRot);

        return actor;
}//CreateActorHaveCharactor