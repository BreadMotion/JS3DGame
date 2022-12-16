/**ゲームオブジェクトの拡張オブジェクト**/
class IComponent{
    /**@type {componentType} componentType*/
    //static componentType = Symbol();

    /**constructor*/
    constructor(){
        this.owner = null;
    }//constructor

    /**PreInitialize*/
    PreInitialize(){}

    /**Initialize*/
    Initialize(){}

    /**コンポーネントをエンティティに追加するメソッド
     * @param {IEntity} entity
     * @return {IEntity} owner*/
    AttachTo(entity){
        this.owner = entity;
        entity.AddComponent(this);
        return this.owner;
    }//function AttachTo

    /**コンポーネントをエンティティから削除するメソッド*/
    Deatach(){
        if(!this.owner) return;
        this.owner.RemoveComponent(this);
        this.owner = null;
    }//function Deatach
}//class Component