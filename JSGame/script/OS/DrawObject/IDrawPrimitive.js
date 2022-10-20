class IDrawPrimitive {
        /**constructor
         * @param {CanvasRenderingContext2D}*/
        constructor(context){
            this.context2D = context;
        }//constructor

        /**矩形を描画する
     * @param {number} x - 矩形の左上の　X座標
     * @param {number} y - 矩形の左上の　Y座標
     * @param {number} width - 矩形の横幅
     * @param {number} height - 矩形の縦幅
     * @param {string} [color] - 矩形の色*/
         DrawRect(x, y, width, height, color){}//DrawRect
    
        /**線分を描画する
         * @param {number} x1 - 線分の始点のX座標
         * @param {number} y1 - 線分の始点のY座標
         * @param {number} x2 - 線分の終点のX座標
         * @param {number} y2 - 線分の終点のY座標
         * @param {string} [color] - 色
         * @param {number} [width=1] - 線幅*/
        DrawLine(x1,y1, x2,y2, color, width = 1){}//DrawLine
    
        /**
         * @param {Array<number>} points - タ角形の各頂点の座標
         * @param {string} [color] - 色*/
        DrawPolygon(points, color){}//DrawPolygon
    
        /** 円を描画する
         * @param {number} x - 円の中心座標X
         * @param {number} y - 円の中心座標Y
         * @param {number} randius - 円の半径
         * @param {string} [color] - 色 */
        DrawCircle(x,y,radius,color){}//DrawCircle
    
        /**扇形を描画する
         * @param {number} x - 扇形の中心座標X
         * @param {number} y - 扇形の中心座標Y
         * @param {number} radius - 扇形の円の半径
         * @param {number} startRadian - 扇形の開始角
         * @param {number} endRadian - 扇形の終了角
         * @param {string} [color] - 色*/
        DrawFan(x,y,radius,startRadian,endRadian,color){}//DrawFan
    
        /**線分を二次ベジェ曲線で描画する
         * @param {number} x1 - 線分の始点の座標X
         * @param {number} y1 - 線分の始点の座標Y
         * @param {number} x2 - 線分の種店の座標X
         * @param {number} y2 - 線分の種店の座標Y
         * @param {number} cx - 制御点の座標X
         * @param {number} cy - 制御店の座標Y
         * @param {string} [color] - 線を描画する際の色
         * @param {number} [width=1] - 線幅*/ 
        DrawQuadraticBezer(x1, y1, x2, y2, cx, cy, color, width = 1){}
    
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
        DrawCubicBezier(x1,y1,x2,y2,cx1,cy1,cx2,cy2,color,width=1){}
    
        /**テキストを描画する
         * @param {string} text - テキスト 
         * @param {number} x - 描画座標X
         * @param {number} y - 描画座標Y
         * @param {string} [color] - 色
         * @param {number} px - テキストピクセルサイズ
         * @param {number} [width] - テキストの幅上限*/
        DrawText(text,x,y,color,px,width){}//DrawText
    
        /**画像をロードしてコールバック関数にロードした画像を与え呼び出す
         * @param {string} path - 画像ファイルのパス
         * @param {function} [callback] - コールバック関数*/
        ImageLoader(path, callback){ }//ImageLoader
};