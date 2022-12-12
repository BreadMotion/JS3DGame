/**Entity管理インスタンス*/
const EntityManager = {
    /**@type {IEntity}*/
    entities : [],

    /**初期化*/
    Initialize : function(){
        this.entities = [];
    },//Iinitialize

    /**保持しているエンティティオブジェクトの全消去*/
    ClearEntities: function(){
        this.enitities = [];
    },//Clear

    AddEntity : function(){
        let newEntity  = new IEntity();
        this.entities.push(newEntity);
        return newEntity;
    },//AddEntity

    RemoveEntity : function(entity){
        this.entities = this.entities.filter(obj => !(obj == entity));
    },//function RemoveEntity
};//LightManager