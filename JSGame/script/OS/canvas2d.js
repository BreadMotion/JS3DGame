class Canvas2D {
    /**constructor
     * @param {HTMLCanvasElement} canvas element* */
    constructor(canvas){
        /**
         * @type {HTMLCanvasElement} */
        this.canvasElement = canvas;
        /**
         * @type {CanvasRenderingContext2D}*/
        this.context2D = this.canvasElement.getContext('2d');
        /**
         * @type {IDrawPrimitive}*/
        this.drawObject = new CanvasDrawPrimitive(this.context2D);
    }//constructor

    /**
     * @return {HTMLCanvasElement}*/
    get Canvas(){
        return this.canvasElement;
    }//get canvas

    /**
     * @return {CanvasRenderingContext2D} */
    get Context(){
        return this.context2D;
    }//get context

    /**
     * @return {IDrawPrimitive}*/
    get DrawObject(){
        return this.drawObject;
    }//get drawObject
}//class canvas2D