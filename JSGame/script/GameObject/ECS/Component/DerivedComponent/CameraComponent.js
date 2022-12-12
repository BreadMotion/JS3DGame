class CameraComponent extends IComponent{
    /**constructor*/
    constructor(){
        super();

        /**@type {ICanvas} canvas*/
        const canvas = App.utils[window.canvasID[0]];
        
        /**@type {THREE.PerspectiveCamera} baseCamera*/
        this.camera = new THREE.PerspectiveCamera(90, canvas.canvasElement.width, canvas.canvasElement.height);
    }//constructor
}// class CameraComponent