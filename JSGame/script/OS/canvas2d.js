class Canvas2D {
    /**constructor
     * @param {HTMLCanvasElement} canvas element
     * @param {IDrawPrimitive} drawObject Interface Draw Primitive Object* */
    constructor(canvas, drawObject){
        /**
         * @type {HTMLCanvasElement} */
        this.canvasElement = canvas;
        /**
         * @type {CanvasRenderingContext2D}*/
        this.context2D = this.canvasElement.getContext('2d');
        /**
         * @type {IDrawPrimitive}*/
        this.drawObject = drawObject;
    }//constructor

    /**
     * @return {HTMLCanvasElement}*/
    get canvas(){
        return this.canvasElement;
    }//get canvas

    /**
     * @return {CanvasRenderingContext2D} */
    get context(){
        return this.context2D;
    }//get context
}//class canvas2D