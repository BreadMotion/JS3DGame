/**無名オブジェクト（グローバル空間を汚染しない為）*/
(()=>{
    //使用する変数オブジェクトの宣言
    window.isKeyDown = {};
    window.mousePosX = 0;
    window.mousePosY = 0;
    window.isMouseLDown = false;
    window.isMouseLUp   = false;
    window.isMouseRDown = false;
    window.isMouseRUp   = false;
    window.canvasBringLength = 30;

    window.canvasID = [];
    window.canvasSelector = [];

    window.canvasID[0] = "mainCanvas";
    window.canvasSelector[0] = '#canvas';

//アプリケーションの初期化イベント
window.addEventListener('load', ()=> {
    //ゲームで使用するアプリケーションのインスタンスの初期化
    App.Initialize(new Audio2D());

    var canvasElement = document.body.querySelector(window.canvasSelector[0]);
    /**const canvas2DObject = new Canvas2D(canvasElement);*/
    const canvas3DObject = new Canvas3D(canvasElement);
    App.AddCanvas(
        window.canvasID[0], 
        canvas3DObject,
        window.innerWidth - window.canvasBringLength,
        window.innerHeight  - window.canvasBringLength
    );

    //ロード
    LoadCheck();
},false);

/**読み込み、初期化フェーズ　ー＞更新フェーズに入る*/
function LoadCheck(){
    let ready = true;

    //check something
    if(ready == true) {}
    //-------------//

    //全ての初期化が上手くいった時
    if(ready === true){
        Initialize();
        EventSetting();
        SceneSetting();
        Update();
    }
    else{ //0.1秒後にもう一度ロードを行う
        setTimeout(LoadCheck, 100);
    }
}// function LoadCheck

/**描画ウィンドウをリサイズする*/
function ResizeWindow(){
    const util = App.utils[window.canvasID[0]];
    window.resizeTo(util.canvasElement.width, util.canvasElement.height);
    util.canvasElement.setAttribute("width", String(util.canvasElement.width));
    util.canvasElement.setAttribute("height", String(util.canvasElement.height));
}//function ResizeWindow

/**初期化*/
function Initialize(){
    ResizeWindow();
    SceneManager.Initialize();
}//function Initialize

/**再帰更新*/
function Update(){
    ResizeWindow();
    App.utils[window.canvasID[0]].ClearBuffer();
    SceneManager.Update();
    Render();
}//function Update

/**更新フェーズ中に処理される大本の描画関数*/
function Render(){
    //ゲーム描画
    SceneManager.Render();

    //Update関数を再帰的に呼び出してループする
    requestAnimationFrame(Update);
}//function Render

/**更新フェーズで発火するか常に調べるイベント*/
function EventSetting(){
    window.addEventListener('keydown',(event)=>{
        window.isKeyDown[`key_${event.key}`] = true;
    },false);

    window.addEventListener('keyup',(event)=>{
        window.isKeyDown[`key_${event.key}`] = false;
    },false);

    window.addEventListener('mousemove', (event)=>{
        let rect = event.target.getBoundingClientRect();
        window.mousePosX = event.clientX - rect.left;
        window.mousePosY = event.clientY - rect.top;
    },false);

    window.addEventListener('mousedown', (event)=>{
        window.isMouseLDown = (event.buttons & 0x0001) ? true : false;
        window.isMouseLUp   = !window.isMouseLDown;
        window.isMouseRDown = (event.buttons & 0x0002) ? true : false;
        window.isMouseRUp   = !window.isMouseRDown;
    },false);
    
    window.addEventListener('mouseup', (event)=>{
        window.isMouseLDown = false;
        window.isMouseLUp   = true;
        window.isMouseRDown = false;
        window.isMouseRDown = true;
    },false);
}//EventSetting

/**管理されるシーンの構築*/
function SceneSetting(){
    SceneManager.Add('Title');

    //起動時に使用するシーンを設定
    SceneManager.Use('Title');
}//function SceneSetting
})();