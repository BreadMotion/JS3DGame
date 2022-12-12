/**ゲームオブジェクトの拡張システム**/
class ISystem{
    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    /**更新関数*/
    Update(){}//function Update

    /**事後更新*/
    PostUpdate(){}//function PostUpdate

    /**コンポーネントの型を指定して、その型を持つエンティティを返すメソッド
     * @param {componentType} componentType 
     * @return {Array<IEntity>} entity*/
    GetEntity(componentType){
        return EntityManager.entities.filter(entity => entity.HasComponent(componentType));
    }//function GetEntity

    /**SceneEntityを取得する
     * @return {IEntity} sceneEntity*/
    GetSceneEntity(){
        return EntityManager.entities[0];
    }//function GetSceneEntity
}//class System