class CameraComponent extends IComponent{
    /**constructor
     * @param {Vector3} position
     * @param {Vector3} euler*/
    constructor(position, euler){
        super();

        /**@type {ICanvas} canvas*/
        const canvas = App.utils[window.canvasID[0]];
        
        /**@type {THREE.PerspectiveCamera} baseCamera*/
        this.camera = new THREE.PerspectiveCamera(90, canvas.canvasElement.width, canvas.canvasElement.height);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        const transform = this.owner.GetComponent(TransformComponent);
        const euler     = new THREE.Euler();
        euler.setFromQuaternion(transform.quaternion.quaternion);

        //transform.position.x = 1000;
        //transform.position.y = 1000;
        transform.position.z = 1000;
        this.camera.position.set(transform.position.x, transform.position.y, transform.position.z);

        this.camera.rotation.x = euler.x;
        this.camera.rotation.y = euler.y;
        this.camera.rotation.z = euler.z;
    }//function PreInitialize
}// class CameraComponent