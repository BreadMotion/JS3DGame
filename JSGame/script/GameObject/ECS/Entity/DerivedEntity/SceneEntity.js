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
        const position = transformComponent.position;
        const quaternion = transformComponent.quaternion;
        this.baseCamera.position.set(position.x,position.y,position.z);
        this.baseCamera.rotation.set(quaternion.x,quaternion.y,quaternion.z,quaternion.w);
    }//constructor
}//class SceneEntity