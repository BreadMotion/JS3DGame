class ICanvas{
    /**constructor
     * @param {HTMLCanvasElement} canvas element* */
    constructor(canvas){
        /**@type {HTMLCanvasElement} canvas element* */
        this.canvasElement = canvas;
    }//constructor

     /** @return {HTMLCanvasElement}*/
    get Canvas(){
        return this.canvasElement;
    }//get Canvas

    /**描画バッファーを初期化する仮想関数*/
    ClearBuffer(){}//function ClearBuffer
}//class ICanvas