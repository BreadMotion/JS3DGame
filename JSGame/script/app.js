//今回はアプリケーションを複数生成することは無いのでシングルトンとみなし
//クラスでは生成しない

/**アプリケーションオブジェクト*/
const App = {
    /**@type {Canvas2D{}}*/
    utils2D : {},

    /**@type {Canvas3D{}}*/
    utils3D : {},
    
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

    /**アプリケーションで使用するオブジェクトの初期化
     * @param {Audio2D} audio - Web Audio APIを格納するオブジェクト*/
    Initialize(audio){
        this.audio2D = audio;
        this.audioContext = this.audio2D.context;
        this.utils2D = {};
        this.utils3D = {};
        this.canvases = {};
        this.contexts = {};
        this.restart = false;

    },//Initialize

    /**2Dキャンバスを追加する
     * @param {String}   key    - Canvas2Dオブジェクトのキー
     * @param {Canvas2D} util   - 描画フレームオブジェクト
     * @param {number}   width  - 描画フレームの幅
     * @param {number}   height - 描画フレームの縦 */
    AddCanvas2D(key, util, width, height){
        this.utils2D[key] = util;
        this.canvases[key] = this.utils[key].Canvas;
        this.contexts[key] = this.utils[key].Context;
        
        this.canvases[key].width = width;
        this.canvases[key].height = height;

        this.CANVAS_WIDTHs[key] = width;
        this.CANVAS_HEIGHTs[key] = height;
    },//AddCanvas

    AddCanvas3D(key, util){
        this.utils3D[key] = util;
    }//function AddCanvas3D
};//var App