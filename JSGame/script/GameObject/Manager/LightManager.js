/**THREE.jsを使用した光の管理インスタンス*/
const LightManager = {
    /**@type {THREE.light}*/
    lights : [],

    /**初期化*/
    Initialize : function(){
        lights = [];
    },//Iinitialize

    /**指定した光オブジェクトを削除*/
    RemoveLight: function(objectname){
        this.lights.splice((element) => {element.name == objectname});
    },//RemoveLight

    /**保持している光オブジェクトの全消去*/
    ClearLights: function(){
        this.lights = [];
    },//Clear

    /**光を構築し返す
     * @param {function} generateFunc - 光りの生成関数
     * @param {String} name - 連想配列に格納時のキー
     * @param {number} color - 光りの色
     * @param {number} inte - 光りの強さ
     * @return {THREE.light}*/
    GenerateLight: function(name,generateFunc,color,inte){
        return this.lights[name] = generateFunc(color,inte);
    }//GenerateLight
};//LightManager