class SceneEntity extends IEntity{
    /**constructor*/
    constructor(){
        super();

        /**@type {ICanvas} canvas*/
        const canvas = App.utils[window.canvasID[0]];

        /**@type {THREE.Scene}*/
        this.scene = new THREE.Scene();

        new CameraComponent().AttachTo(this);
        
        const transformComponent = this.GetComponent(TransformComponent);
        //transformComponent.position.x = -3000;
        //transformComponent.position.y = -3000;
        //transformComponent.position.z = -3000;
        const position = transformComponent.position;

        const camera = this.GetComponent(CameraComponent);
        camera.camera.position.set(position.x,position.y,position.z);
        camera.camera.rotation.set(0,0,0);
    }//constructor
}//class SceneEntity