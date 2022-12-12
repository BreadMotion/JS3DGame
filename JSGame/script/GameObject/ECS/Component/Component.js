/**ゲームオブジェクトの拡張オブジェクト**/
class IComponent{
    /**コンポーネントの型*/
    static componentType = Symbol();

    /**コンポーネントをエンティティに追加するメソッド
     * @param {IEntity} entity
     * @return {IEntity} owner*/
    AttachTo(entity){
        entity.AddComponent(this);
        this.owner = entity;
        return this.owner;
    }//function AttachTo

    /**コンポーネントをエンティティから削除するメソッド*/
    Deatach(){
        if(!this.owner) return;
        this.owner.RemoveComponent(this);
        this.owner = null;
    }//function Deatach
}//class Component