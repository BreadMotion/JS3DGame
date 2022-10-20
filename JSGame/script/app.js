//今回はアプリケーションを複数生成することは無いのでシングルトンとみなし
//クラスでは生成しない

/**アプリケーションオブジェクト*/
var App = {
    /**@type {Canvas2D}*/
    util : null,
    
    /**@type {HTMLCanvasElement}*/
    canvas : null,

    /**@type {CanvasRenderingContext2D}*/
    context : null,
    
    /**@type {Audio2D}*/
    audioContext : null,

    /**@type {boolean}*/
    restart : false,

    /**@type {number}*/
    CANVAS_WIDTH  : 0,
    
    /**@type {number}*/
    CANVAS_HEIGHT : 0,

    /**@return {Canvas2D}*/
    get Util(){ 
        return this.util;
    },//Util

    /**@return {HTMLCanvasElement}*/
    get Canvas(){
        return this.canvas;
    },//Canvas

    /**@return {CanvasRenderingContext2D}*/
    get Context(){
        return this.context;
    },//Context

    /**@return {Audio2d}*/
    get Audio2D(){
        return this.audio2D;
    },//audio2D

    /**@return {AudioContext}*/
    get AudioCtx(){
        return this.audioContext;
    },//AudioContext

    /**@return {number} キャンバスの幅*/
    get Canvas_Width(){
        return this.CANVAS_WIDTH;
    },//Canvas_Width

    /**@return {number} キャンバスの高さ*/
    get Canvas_Height(){
        return this.CANVAS_HEIGHT;
    },//Canvas_Height

    /**アプリケーションで使用するオブジェクトの初期化
     * @param {Audio2D} audio - Web Audio APIを格納するオブジェクト
     * @param {Canvas2d} util - キャンバスを格納しているオブジェクト
     * @param {number} width - キャンバスの幅
     * @param {number} height - キャンバスの高さ*/
    Initialize(audio, util,width,height){
        this.util = util;
        this.canvas = this.util.canvas;
        this.context = this.util.context;
        this.audio2D = audio;
        this.audioContext = this.audio2D.context;
        
        this.canvas.width = width;
        this.CANVAS_WIDTH = width;

        this.canvas.height = height;
        this.CANVAS_HEIGHT = height;
    },//Initialize
};//var App