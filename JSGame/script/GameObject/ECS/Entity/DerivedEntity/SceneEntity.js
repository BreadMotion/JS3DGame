class SceneEntity extends IEntity{
    /**constructor*/
    constructor(){
        super();

        /**@type {THREE.Scene}*/
        this.scene = new THREE.Scene();

        new CameraComponent().AttachTo(this);
    }//constructor
}//class SceneEntity