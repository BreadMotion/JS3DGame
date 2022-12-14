/**Entity管理インスタンス*/
const SystemManager = {
    /**@type {ISystem}*/
    systems : [],

    /**初期化*/
    Initialize : function(){
        this.systems = [];
    },//function Iinitialize

    /**保持しているシステムオブジェクトの全消去*/
    ClearSystems: function(){
        this.systems = [];
    },//function ClearSystems

    /**システム追加関数
     * @param{ISystem} system*/
    AddSystem : function(system){
        this.systems.push(system);
        return system;
    },//function AddSystem

    /**システム取得関数*
     * @param {ISystem.property} systemClass*/
    GetSystem : function(systemClass){
        return this.systems.find(system => system.constructor === systemClass);
    },//function GetSystem

    /**更新関数*/
    Update : function(){
        for(let system of this.systems){
            system.PreUpdate();
            system.Update();
            system.PostUpdate();
        }
    },//function Update
};//LightManager