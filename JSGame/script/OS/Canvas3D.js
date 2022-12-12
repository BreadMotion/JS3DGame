class Canvas3D {
    /**constructor
     * @param {HTMLCanvasElement} canvas element* */
    constructor(canvas){
        /** @type {WebGLRenderer} */
        this.renderer = new THREE.WebGLRenderer({canvas: canvas});
    }//constructor
}//class canvas2D