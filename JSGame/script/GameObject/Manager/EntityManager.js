/**Entity管理インスタンス*/
const EntityManager = {
    /**@type {Array<IEntity>}*/
    entities : [],

    /**@return {Array<IEntity>}*/
    get Entities(){ return this.entities; },// get Entities

    /**初期化*/
    Initialize : function(){
        this.entities = [];
        this.entities.push(new SceneEntity());
    },//Iinitialize

    /**保持しているエンティティオブジェクトの全消去*/
    ClearEntities: function(){
        this.enitities = [];
    },//Clear

    /**エンティティを生成する*/
    AddEntity : function(entity){
        if(entity != undefined){
            this.entities.push(entity);
            return entity;
        }
        else{
            let newEntity  = new IEntity();
            this.entities.push(newEntity);
            return newEntity;
        }
    },//function AddEntity

    RemoveEntity : function(entity){
        this.entities = this.entities.filter(obj => !(obj == entity));
    },//function RemoveEntity
};//LightManager