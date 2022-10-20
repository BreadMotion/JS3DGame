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
    }//constructor

    /**
     * @return {HTMLCanvasElement}*/
    get canvas(){
        return this.canvasElement;
    }
    /**
     * @return {CanvasRenderingContext2D} */
    get context(){
        return this.context2D;
    }

    /**矩形を描画する
     * @param {number} x - 矩形の左上の　X座標
     * @param {number} y - 矩形の左上の　Y座標
     * @param {number} width - 矩形の横幅
     * @param {number} height - 矩形の縦幅
     * @param {string} [color] - 矩形の色*/
    DrawRect(x, y, width, height, color){
        this.context2D.save();
        if(color != null) {
            this.context2D.fillStyle = color;
        }
        this.context2D.fillRect(x,y,width,height);
        this.context2D.restore();
    }//DrawRect

    /**線分を描画する
     * @param {number} x1 - 線分の始点のX座標
     * @param {number} y1 - 線分の始点のY座標
     * @param {number} x2 - 線分の終点のX座標
     * @param {number} y2 - 線分の終点のY座標
     * @param {string} [color] - 色
     * @param {number} [width=1] - 線幅*/
    DrawLine(x1,y1, x2,y2, color, width = 1){
        this.context2D.save();
        if(color != null) {
            this.context2D.strokeStyle = color;
        }
        this.context2D.lineWidth = width;
        this.context2D.beginPath();
        this.context2D.moveTo(x1,y1);
        this.context2D.lineTo(x2,y2);
        this.context2D.closePath();
        this.context2D.stroke();
        this.context2D.restore();
    }//DrawLine

    /**
     * @param {Array<number>} points - タ角形の各頂点の座標
     * @param {string} [color] - 色*/
    DrawPolygon(points, color){
        //pointsが配列であるかどうか確認し、タ角形を書くために
        //十分な個数のデータが存在するか調べる
        if(Array.isArray(points) !== true || points.length < 6) {
            return;
        }

        this.context2D.save();
        if(color != null) {
            this.context2D.fillStyle = color;
        }
        this.context2D.beginPath();
        this.context2D.mobeTo(points[0], points[1]);
        for(let i = 2; i < points.length; i += 2) {
            this.context2D.lineTo(points[i], points[i +1]);
        }
        this.context2D.closePath();
        this.context2D.fill();
        this.context2D.restore();
    }//DrawPolygon

    /** 円を描画する
     * @param {number} x - 円の中心座標X
     * @param {number} y - 円の中心座標Y
     * @param {number} randius - 円の半径
     * @param {string} [color] - 色 */
    DrawCircle(x,y,radius,color){
        this.context2D.save();
        if(color != null) this.context2D.fillStyle = color;
        this.context2D.beginPath();
        this.context2D.arc(x,y,radius,0.0,Math.PI*2.0);
        this.context2D.closePath();
        this.context2D.fill();
        this.context2D.restore();
    }//DrawCircle

    /**扇形を描画する
     * @param {number} x - 扇形の中心座標X
     * @param {number} y - 扇形の中心座標Y
     * @param {number} radius - 扇形の円の半径
     * @param {number} startRadian - 扇形の開始角
     * @param {number} endRadian - 扇形の終了角
     * @param {string} [color] - 色*/
    DrawFan(x,y,radius,startRadian,endRadian,color){
        this.context2D.save();
        if(color!=null)this.context2D.fillStyle=color;
        this.context2D.beginPath();
        this.context2D.moveTo(x,y);
        this.context2D.arc(x,y,radius,startRadian,endRadian);
        this.context2D.closePath();
        this.context2D.fill();
        this.context2D.restore();
    }//DrawFan

    /**線分を二次ベジェ曲線で描画する
     * @param {number} x1 - 線分の始点の座標X
     * @param {number} y1 - 線分の始点の座標Y
     * @param {number} x2 - 線分の種店の座標X
     * @param {number} y2 - 線分の種店の座標Y
     * @param {number} cx - 制御点の座標X
     * @param {number} cy - 制御店の座標Y
     * @param {string} [color] - 線を描画する際の色
     * @param {number} [width=1] - 線幅*/ 
    DrawQuadraticBezer(x1, y1, x2, y2, cx, cy, color, width = 1){
        this.context2D.save();
        if(color != null) this.context2D.strokeStyle = color;
        this.context2D.lineWidth = width;
        this.context2D.beginPath();
        this.context2D.moveTo(x1,y1);
        this.context2D.quadraticCurveTo(cx,cy,x2,y2);
        this.context2D.closePath();
        this.context2D.stroke();
        this.context2D.restore();
    }

    /**線分を三次ベジェ曲線で描画する
     * @param {number} x1 - 線分の始点の座標X
     * @param {number} y1 - 線分の始点の座標Y
     * @param {number} x2 - 線分の終点の座標Ｘ
     * @param {number} y2 - 線分の終点の座標Ｙ
     * @param {number} cx1 - 始点の制御点の座標Ｘ
     * @param {number} cy1 - 始点の制御点の座標Ｙ
     * @param {number} cx2 - 終点の制御点の座標Ｘ
     * @param {number} cy2 - 終点の制御店の座標Ｙ
     * @param {string} [color] - 線を描画する際の色
     * @param {number} [width=1] - 線幅*/ 
    DrawCubicBezier(x1,y1,x2,y2,cx1,cy1,cx2,cy2,color,width=1){
        this.context2D.save();
        if(color != null)this.context2D.strokeStyle = color;
        this.context2D.lineWidth = width;
        this.context2D.beginPath();
        this.context2D.moveTo(x1,y1);
        this.context2D.bezierCurveTo(cx1,cy1,cx2,cy2,x2,y2);
        this.context2D.closePath();
        this.context2D.stroke();
        this.context2D.restore();
    }

    /**テキストを描画する
     * @param {string} text - テキスト 
     * @param {number} x - 描画座標X
     * @param {number} y - 描画座標Y
     * @param {string} [color] - 色
     * @param {number} px - テキストピクセルサイズ
     * @param {number} [width] - テキストの幅上限*/
    DrawText(text,x,y,color,px,width){
        this.context2D.save();
        if(color!=null)this.context2D.fillStyle=color;
        this.context2D.shadowBlur = 10;
        this.context2D.contrast = 200;
        this.context2D.shadowColor = 'crimson';
        this.context2D.font = 'bold ' + String(px) + 'px cursive';
        this.context2D.fillText(text,x,y,width);
        this.context2D.restore();
    }//DrawText

    /**画像をロードしてコールバック関数にロードした画像を与え呼び出す
     * @param {string} path - 画像ファイルのパス
     * @param {function} [callback] - コールバック関数*/
    ImageLoader(path, callback){
        //画像のインスタンスを生成する
        let target = new Image();
        //画像がロード完了した時の処理
        target.addEventListener('loader', ()=>{
            if(callback!=null) callback(taget);
        }, false);
        //画像のロードを介すするためにパスを指定する
        taget.src=path;
    }//ImageLoader
}//class canvas2D