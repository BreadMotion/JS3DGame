class SceneEntity extends IEntity{
    /**constructor*/
    constructor(){
        super();

        /**@type {ICanvas} canvas*/
        const canvas = App.utils[window.canvasID[0]];

        /**@type {THREE.Scene}*/
        this.scene = new THREE.Scene();

        /**@type {THREE.PerspectiveCamera} baseCamera*/
        this.baseCamera = new THREE.PerspectiveCamera(90, canvas.canvasElement.width / canvas.canvasElement.height);
        
        const transformComponent = this.GetComponent(TransformComponent);
        transformComponent.position.x += 50;
        transformComponent.position.y -= 100;
        transformComponent.position.z += 1000;
        const position = transformComponent.position;

        this.baseCamera.position.set(position.x,position.y,position.z);
        this.baseCamera.rotation.set(0.4,0.4,0.4);
    }//constructor
}//class SceneEntity