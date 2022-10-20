/**THREE.jsを使用したカメラを生成する。
 * 描画バッファーを持つようなイメージで使用すれば大丈夫*/
class CameraComponent extends IComponent{
    /**constructor
     * @param {function} generateFunc - THREE.jsのカメラ生成関数
     * @param {HTMLCanvasElement} canvas - CanvasElement
     * @param {number} width - レンダラーのフレーム幅
     * @param {number} height - レンダラーのフレーム高
     * @param {...} ary - カメラ生成時に必要なコンストラクタ引数*/
    constructor(generateFunc, canvas, width, height, ...ary){
        this.camera = new generateFunc();
        this.renderer = new THREE.WebGLRenderer({canvas: canvasElement});
        this.renderer.setSize(width, height);
    }//constructor
};//CameraComponent