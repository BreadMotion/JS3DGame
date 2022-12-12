/**ゲームオブジェクトの拡張システム**/
class ISystem{
    /**constructor
     * @param{Array<IEntity>} entities*/
    constructor(entities){
        this.entities = entities;
    }//constructor

    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    /**更新関数*/
    Update(){}//function Update

    /**事後更新*/
    PostUpdate(){}//function PostUpdate

    /**コンポーネントの型を指定して、その型を持つエンティティを返すメソッド
     * @return {componentType} componentType */
    GetEntity(componentType){
        return this.entities.filter(entity => entity.HasComponent(componentType));
    }//function GetEntity
}//class System