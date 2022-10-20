/**二次元ベクトル*/
class Vector2 {
    /**
     * @param {number} x - x成分
     * @param {number} y - y成分 */
    constructor(x=0, y=0){
        /** @type {number} - x成分*/
        this.x = x;

        /** @type {number} - y成分*/
        this.y = y;
    }//Constructor

    /**加算
     * @param {Vector2} vec - 二次元ベクトル */
    Add(vec){
        this.x += vec.x; this.y += vec.y; return this;
    }//Add

    /**減算
     * @param {Vector2} vec - 二次元ベクトル */
    Sub(vec){
        this.x -= vec.x; this.y -= vec.y; return this;
    }//Sub

    /**積算
     * @param {Vector2} vec - 二次元ベクトル*/
    Mul(vec){
        this.x *= vec.x; this.y *= vec.y; return this;
    }//Mul

    /**除算
     * @param {Vector2} vec - 二次元ベクトル*/
    Div(vec){
        this.x /= vec.x; this.y /= vec.y; return this;
    }//Div
}//class Vector2

/**加算
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Add(vec1,vec2){
    return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
}//Vector2_Add

/**減算
* @param {Vector2} vec1 - ベクトル 
* @param {Vector2} vec2 - ベクトル
* @return {Vector2}*/
function Vector2_Sub(vec1,vec2){
    return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
}//Vector2_Sub

/**積算
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Mul(vec1,vec2){
    return new Vector2(vec1.x * vec2.x, vec1.y * vec2.y);
}//Vector2_Mul

/**除算
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Div(vec1,vec2){
    return new Vector2(vec1.x / vec2.x, vec1.y / vec2.y);
}//Vector2_Div

/**二次元ベクトルの長さを返す
 * @param {Vector2} vec1 - ベクトル 
 * @return {Vector2} */
function Vector2_Length(vec){
    return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y));
}// function Vector2_Length

/**二次元ベクトルの変位度を返す
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Dot(vec1, vec2){
    const vec = Vector2_Mul(vec1,vec2);
    return vec.x + vec.y;
}//function Vector2_Dot

/**外積
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Cross(vec1,vec2){
    return vec1.x * vec2.y - vec1.y * vec2.x;
}//Vector2_Cross

/**二次元ベクトルの単位ベクトルを返す
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function Vector2_Normalize(vec){
    let   nVec   = new Vector2();
    const length = Vector2_Length(vec);

    nVec.x = vec.x / length;
    nVec.y = vec.y / length;
    return nVec;
}//Vector2_Normalize

/**線分上で点Pに一番近い座標を返す
 * @param {Vector2} vec1 - ベクトル 
 * @param {Vector2} vec2 - ベクトル
 * @return {Vector2}*/
function ClosestPoint(P, A, B){
    let ab = new Vector2(B.x - A.x, B.y - A.y);
    let ap = new Vector2(P.x - A.x, P.y - A.y);

    //ABの単位ベクトルを計算
    let nAB = Vector2_Normalize(ab);

    //Aから線上最近点までの距離(ABベクトルの後ろにあるときはマイナス値)
    let distAX = Vector2_Dot(nAB, ap);
    let abLen  = Vector2_Length(ab);

    //線上最近点
    let ret = new Vector2();
    if(abLen <= distAX) {
        ret = B;
    }
    else if(distAX < 0){
         ret = A;
    }
    else{
        ret.x = A.x + (nAB.x * distAX);
        ret.y = A.y + (nAB.y * distAX);
    }
    return ret;
}//ClosestPoint