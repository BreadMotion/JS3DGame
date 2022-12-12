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
        this.baseCamera.position.set(0,0,+1000);
    }//constructor
}//class SceneEntity