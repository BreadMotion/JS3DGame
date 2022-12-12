class Canvas2D extends ICanvas{
    /**constructor
     * @param {HTMLCanvasElement} canvas element* */
    constructor(canvas){
        super(canvas);
        
        /** @type {CanvasRenderingContext2D}*/
        this.context2D = this.canvasElement.getContext('2d');
        
        /** @type {IDrawPrimitive}*/
        this.drawObject = new CanvasDrawPrimitive(this.context2D);
    }//constructor

    /** @return {CanvasRenderingContext2D} */
    get Context(){
        return this.context2D;
    }//get context

    /** @return {IDrawPrimitive}*/
    get DrawObject(){
        return this.drawObject;
    }//get drawObject

    /**描画バッファーを初期化するオーバーライド関数*/
    ClearBuffer(){
        this.context2D.globalAlpha = 1.0;
        this.context2D.fillRect(0,0, this.canvasElement.width, this.canvasElement.height);
    }
}//class canvas2D