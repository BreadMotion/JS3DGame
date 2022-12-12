class Canvas3D extends ICanvas{
    /**constructor
     * @param {HTMLCanvasElement} canvas element* */
    constructor(canvas){
        super(canvas);

        /** @type {WebGLRenderer} */
        this.renderer = new THREE.WebGLRenderer({canvas: canvas});
    }//constructor

    /** @return {WebGLRenderer}*/
    get Renderer(){
        return this.renderer;
    }//get Renderer

    /**描画バッファーを初期化するオーバーライド関数*/
    ClearBuffer(){

    }
}//class canvas2D