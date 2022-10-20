/** Web Audio APIのコンテキストとOSC等を格納するAudioNodeを所有するオブジェクト*/
class Audio2D {
    /** constructor */
    constructor(){
        /** @type {AudioContext}*/
        this.context = new AudioContext();

        /** @type {AudioNode[]}*/
        this.audios = {};
    }//constructor

    /**オーディオを構築&格納する（mp3ファイルを格納しているわけではない）
     * @param {String} key - オーディオオブジェクトのキー
     * @param {String} type - 波形の種類*/
    AddAudio(key,type){
        this.audios[key] = new AudioNode(this.context,type);
    }
}//class Audio2D

/**オーディオデータオブジェクト*/
class AudioNode{
    /**constructor
     * @param {AudioContext} audiocontext - 
     * @param {String} type - 波形の種類*/
    constructor(audiocontext, type){
        /** @type {AudioContext}*/
        this.context = audiocontext;

        /** @type {OSCillatorNode}*/
        this.osc = this.context.createOscillator();

        /** @type {GainNode}*/
        this.gaincontext = this.context.createGain();

        /** @type {String}*/
        this.type = type;

        /**@type {boolean}*/
        this.isPlay = false;
    }//constructor

    /**音を再生する（重複再生はしない）
     * @param {number} freq - 周波数
     * @param {number} duration - 再生の遅延秒数
     * @param {number} value - 音量 */
    Start(freq,duration,value){
        //再生中の場合早期リターン
        if(this.isPlay == true){
             return;
        }
        this.osc.frequency.setValueAtTime(freq, this.context.currentTime);

        this.osc.type = this.type;
        this.gaincontext.gain.value = value;

        this.osc.connect(this.gaincontext);
        this.gaincontext.connect(this.context.destination);

        this.osc.start(this.context.currentTime,0,duration);
        this.isPlay = true;
    }//Start

    /**音を再再生する
     * @param {number} freq - 周波数
     * @param {number} duration - 再生の遅延秒数
     * @param {number} value - 音量 */
    Restart(freq,duration,value){
        this.osc.stop();

        this.osc.frequency.setValueAtTime(freq, this.context.currentTime);

        this.osc.type = this.type;
        this.gaincontext.gain.value = value;

        this.osc.connect(this.gaincontext);
        this.gain.connect(this.context.destination);
        this.osc.start(this.context.currentTime,0,duration);
        this.isPlay = true;
    }//Restart

    /**音を停止する*/
    Stop(){
        this.gaincontext.gain.value = 0;
        this.isPlay  = false;
    }//Stop

    /**音量を変更する
     * @param {number} value - 音量*/
    ChangeValue(value){
        this.gaincontext.gain.value = value;
    }//ChangeValue

    /**周波数を変更する
     * @param {number} freq - 周波数*/
    ChangeFreqency(freq){
        this.osc.frequency.value = freq;
    }//ChangeFrequency
}//AudioNode