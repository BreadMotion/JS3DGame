/**度数法からラジアンを生成
 * @param {number} degrees - 度数法の角度*/
function DegreeToRadian(degrees){
    return degrees * Math.PI / 180;
}//DegreeToRadian

/**ラジアンから度数法を生成
 * @param {number} radian - ラジアンの角度*/
function RadianToDegree(radian){
    return radian * 180 / Math.PI;
}//RadianToDegree

/**特定の範囲におけるランダムな整数の値を生成する
 * @param {number} range - 乱数を生成する範囲(０以上～range未満)*/
function GenerateRandomInt(range){
    let random = Math.random();
    return Math.floor(random * range);
}//GeneraterandomInt

/**数値の不足した桁数を零で埋めた文字列を返す
 * @param {number} numbe - 数値
 * @param {number} count - 桁数(二桁以上)*/
function ZeroPadding(number,count){
    //配列を指定の桁数分の長さで初期化する
    let zeroArray = new Array(count);
    //配列の要素を０を挟んで連結する
    let zeroString = zeroArray.join('0') + number;
    //文字列の後ろから桁数分だけ文字を抜き取る
    return zeroString.slice(-count);
}//ZeroPadding