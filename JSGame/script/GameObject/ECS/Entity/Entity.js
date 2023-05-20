/**ゲームオブジェクトの基盤**/
class IEntity extends THREE.Object3D{ // 継承したことことによる設計の変化はRenderComponent のSpotLightComponentのConstructorに記載している。
    /**所有しているコンポーネント
     * @type {Array<IComponent>} components*/
    components = [];
    
    /**constructor*/
    constructor(){
      //new TransformComponent(new Vector3(0,0,0), new Quaternion()).AttachTo(this);
    }//constructor

    /**コンポーネントを追加する
     * @param {IComponent} component
     * @return {IComponent} component*/
   AddComponent(component){
    component.PreInitialize();
    component.Initialize();
    this.components.push(component);
    return component;
   }//function AddComponent

   /**コンポーネントがあれば参照を返す
    * @param {IComponent.property} componentType*/
   GetComponent(componentType){
    return this.components.find(com => com.constructor.name == componentType.name);
   }// function GetComponent

   /**コンポーネントがあるか確認する
    * @param {IComponent.property} componentType*/
   HasComponent(componentType){
    return this.components.some(com => com.constructor.name == componentType.name);
   }//function HasComponent

   /**コンポーネントを削除する
    * @param{ID} ID
    * @return {IComponent.property} componentType*/
   RemoveComponent(componentType){
    this.components = this.components.filter(com => !(com.constructor.name == componentType.name));
   }//function RemoveComponent
}//class Entity