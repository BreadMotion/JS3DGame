/**Entity管理インスタンス*/
const EntityManager = {
    /**@type {Array<IEntity>}*/
    entities : [],

    /**@return {Array<IEntity>}*/
    get Entities(){ return this.entities; },

    /**初期化*/
    Initialize : function(){
        this.entities = [];
    },//Iinitialize

    /**保持しているエンティティオブジェクトの全消去*/
    ClearEntities: function(){
        this.enitities = [];
    },//Clear

    AddEntity : function(entity){
        if(entity !== undefined){
            this.entities.push(entity);
            return entity;
        }
        else{
            let newEntity  = new IEntity();
            this.entities.push(newEntity);
            return newEntity;
        }
    },//AddEntity

    RemoveEntity : function(entity){
        this.entities = this.entities.filter(obj => !(obj == entity));
    },//function RemoveEntity
};//LightManager