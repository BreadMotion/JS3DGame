/**ゲームオブジェクトの基盤**/
class IEntity{
    /**所有しているコンポーネント*/
    components = [];
    /**constructor*/
    constructor(){
      new TransformComponent().AttachTo(this);
    }

    /**コンポーネントを追加する
     * @param {IComponent} component
     * @return {IComponent} component*/
   AddComponent(component){
    this.components.push(component);
    return component;
   }//function AddComponent

   /**コンポーネントがあれば参照を返す
    * @param {ComponentType} componentType*/
   GetComponent(componentType){
    return this.components.find(com => com instanceof componentType);
   }// function GetComponent

   /**コンポーネントがあるか確認する
    * @param{ComponentType} componentType*/
   HasComponent(componentType){
    return this.components.some(com => com instanceof componentType);
   }//function HasComponent

   /**コンポーネントを削除する
    * @param{ID} ID
    * @return {componentType} componentType*/
   RemoveComponent(componentType){
    this.components = this.components.filter(com => !(com instanceof componentType));
   }//function RemoveComponent
}//class Entity