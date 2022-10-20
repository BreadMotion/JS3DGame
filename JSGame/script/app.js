//今回はアプリケーションを複数生成することは無いのでシングルトンとみなし
//クラスでは生成しない

/**アプリケーションオブジェクト*/
var App = {
    /**@type {Canvas2D{}}*/
    utils : {},
    
    /**@type {HTMLCanvasElement{}}*/
    canvases : {},

    /**@type {CanvasRenderingContext2D{}}*/
    contexts : {},
    
    /**@type {Audio2D}*/
    audioContext : null,

    /**@type {boolean}*/
    restart : false,

    /**@type {number{}}*/
    CANVAS_WIDTHs  : {},
    
    /**@type {number{}}*/
    CANVAS_HEIGHTs : {},

    /**@return {Audio2d}*/
    get Audio2D(){
        return this.audio2D;
    },//audio2D

    /**@return {AudioContext}*/
    get AudioCtx(){
        return this.audioContext;
    },//AudioContext

    /**アプリケーションで使用するオブジェクトの初期化
     * @param {Audio2D} audio - Web Audio APIを格納するオブジェクト*/
    Initialize(audio){
        this.audio2D = audio;
        this.audioContext = this.audio2D.context;
    },//Initialize

    /**キャンバスを追加する
     * @param {String}   key    - Canvas2Dオブジェクトのキー
     * @param {Canvas2D} util   - 描画フレームオブジェクト
     * @param {number}   width  - 描画フレームの幅
     * @param {number}   height - 描画フレームの縦 */
    AddCanvas(key, util, width, height){
        this.utils[key] = util;
        this.canvases[key] = this.utils[key].Canvas;
        this.contexts[key] = this.utils[key].Context;
        
        this.canvases[key].width = width;
        this.canvases[key].height = height;

        this.CANVAS_WIDTHs[key] = width;
        this.CANVAS_HEIGHTs[key] = height;
    }//AddCanvas
};//var App