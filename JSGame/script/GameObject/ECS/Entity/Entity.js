/**ゲームオブジェクトの基盤**/
class IEntity{
    /**所有しているコンポーネント
     * @type {Array<IComponent>} components*/
    components = [];
    
    /**constructor*/
    constructor(){
      new TransformComponent(new Vector3(0,0,0), new Quaternion()).AttachTo(this);
    }//constructor

    /**コンポーネントを追加する
     * @param {IComponent} component
     * @return {IComponent} component*/
   AddComponent(component){
    this.components.push(component);
    return component;
   }//function AddComponent

   /**コンポーネントがあれば参照を返す
    * @param {IComponent.property} componentType*/
   GetComponent(componentType){
    const findObjects = this.components.find(com => com === GetClass(componentType));
    return findObjects == undefined ? undefined : findObjects[0];
   }// function GetComponent

   /**コンポーネントがあるか確認する
    * @param {IComponent.property} componentType*/
   HasComponent(componentType){
    return this.components.some(com => com === GetClass(componentType));
   }//function HasComponent

   /**コンポーネントを削除する
    * @param{ID} ID
    * @return {IComponent.property} componentType*/
   RemoveComponent(componentType){
    this.components.delete(component);
    this.components = this.components.filter(com => !(com === GetClass(componentType)));
   }//function RemoveComponent
}//class Entity