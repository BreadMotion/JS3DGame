/**コンポーネントの抽象クラス*/
class IComponent{
    /**@return {string} id - コンポーネントのクラスタグ*/
    get ID(){
         return this.id; 
    }//ID
    
    /**constructor
     * @param {Actor} 所有者*/
    constructor(owner){
        this.id = this.constructor.name;
        this.owner = owner;
    }//constructor

    //-----------------------vitual method------------------//
    /**初期化 vitual method*/
    Initialize(){}//Initialize

    /**事後初期化 vitual method*/
    PostInitialize(){}//PostInitialize

    /**更新 vitual method*/
    Update(){}//Update

    /**事後更新vitual method*/
    PostUpdate(){}//PostUpdate
}//class IComponent