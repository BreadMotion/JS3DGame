 /**シーンオブジェクト　抽象クラス*/
class IScene {
    /**constructor*/
    constructor(){
        //this.sceneThree = new THREE.Scene();
    }//constructor

    /**初期化 virtual method*/
    Initialize(){}//Initialize

    /**更新 virtual method*/
    Update(time){}//Update

    /**描画 virtual method*/
    Render(){}//Render

    /**終了 virtual method*/
    Finalize(){}//Finalize
}//class IScene