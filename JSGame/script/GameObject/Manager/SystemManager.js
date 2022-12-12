/**Entity管理インスタンス*/
const SystemManager = {
    /**@type {ISystem}*/
    systems : [],

    /**初期化*/
    Initialize : function(){
        this.systems = [];
        this.AddSystem(new TransformSystem(EntityManager.entities));
    },//function Iinitialize

    /**保持しているシステムオブジェクトの全消去*/
    ClearSystems: function(){
        this.systems = [];
        AddSystem(new TransformSystem(EntityManager.entities));
    },//function ClearSystems

    /**システム追加関数
     * @param{ISystem} system*/
    AddSystem : function(system){
        this.systems.push(system);
    },//function AddSystem

    /**更新関数*/
    Update : function(){
        for(let system of this.systems){
            system.PreUpdate();
            system.Update();
            system.PostUpdate();
        }
    },//function Update
};//LightManager