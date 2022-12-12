//今回はアプリケーションを複数生成することは無いのでシングルトンとみなし
//クラスでは生成しない

/**アプリケーションオブジェクト*/
const App = {
    /**@type {ICanvas{}}*/
    utils : {},
    
    /**@type {Audio2D}*/
    audioContext : null,

    /**@type {boolean}*/
    restart : false,

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

    /**キャンバスを追加する
     * @param {String}   key    - Canvas2Dオブジェクトのキー
     * @param {Canvas2D} util   - 描画フレームオブジェクト
     * @param {number}   width  - 描画フレームの幅
     * @param {number}   height - 描画フレームの縦 */
    AddCanvas(key, util, width, height){
        this.utils[key] = util;
        this.utils[key].canvasElement.width = width;
        this.utils[key].canvasElement.height = height;
    }//AddCanvas
};//var App