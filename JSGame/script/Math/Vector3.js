/**三次元ベクトル*/
class Vector3 {
    /**constructor
     * @param {number} x - x成分
     * @param {number} y - y成分 
     * @param {number} z - z成分*/
    constructor(x=0, y=0, z=0){
        /** @type {number} - x成分*/
        this.x = x;

        /** @type {number} - y成分*/
        this.y = y;

        /** @type {number} - z成分*/
        this.z = z;
    }//Constructor

    /**加算
     * @param {Vector3} vec - 三次元ベクトル */
    Add(vec){
        this.x += vec.x; this.y += vec.y; this.z += vec.z; return this;
    }//Add

    /**減算
     * @param {Vector3} vec - 三次元ベクトル */
    Sub(vec){
        this.x -= vec.x; this.y -= vec.y; this.z -= vec.z; return this;
    }//Sub

    /**積算
     * @param {Vector3} vec - 三次元ベクトル*/
    Mul(vec){
        this.x *= vec.x; this.y *= vec.y; this.z *= vec.z; return this;
    }//Mul

    /**除算
     * @param {Vector3} vec - 三次元ベクトル*/
    Div(vec){
        this.x /= vec.x; this.y /= vec.y; this.z /= vec.z; return this;
    }//Div
}//class Vector3

/**加算
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Add(vec1,vec2){
    return new Vector3(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
}//Vector3_Add

/**減算
* @param {Vector3} vec1 - ベクトル 
* @param {Vector3} vec2 - ベクトル
* @return {Vector3}*/
function Vector3_Sub(vec1,vec2){
    return new Vector3(vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
}//Vector3_Sub

/**積算
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Mul(vec1,vec2){
    return new Vector3(vec1.x * vec2.x, vec1.y * vec2.y, vec1.z * vec2.z);
}//Vector3_Mul

/**除算
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Div(vec1,vec2){
    return new Vector3(vec1.x / vec2.x, vec1.y / vec2.y, vec1.z / vec2.z);
}//Vector3_Div

/**三次元ベクトルの長さを返す
 * @param {Vector3} vec1 - ベクトル 
 * @return {Vector3} */
function Vector3_Length(vec){
    return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y) + (vec.z * vec.z));
}// function Vector3_Length

/**三次元ベクトルの変位度を返す
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Dot(vec1, vec2){
    const vec = Vector2_Mul(vec1,vec2);
    return vec.x + vec.y + vec.z;
}//function Vector3_Dot

/**外積
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Cross(vec1,vec2){
    return new Vector3(
        (vec1.y * vec2.z) - (vec1.z * vec2.y),
        (vec1.z * vec2.x) - (vec1.x * vec2.z),
        (vec1.x * vec2.y) - (vec1.y * vec2.x)
    );
}//Vector3_Cross

/**三次元ベクトルの単位ベクトルを返す
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function Vector3_Normalize(vec){
    let   nVec   = new Vector3();
    const length = Vector3_Length(vec);

    nVec.x = vec.x / length;
    nVec.y = vec.y / length;
    nVec.z = vec.z / length;
    return nVec;
}//Vector3_Normalize

/**線分上で点Pに一番近い座標を返す
 * @param {Vector3} vec1 - ベクトル 
 * @param {Vector3} vec2 - ベクトル
 * @return {Vector3}*/
function ClosestPoint(P, A, B){
    let ab = new Vector3(B.x - A.x, B.y - A.y, B.z - A.z);
    let ap = new Vector3(P.x - A.x, P.y - A.y, P.z - A.z);

    //ABの単位ベクトルを計算
    let nAB = Vector3_Normalize(ab);

    //Aから線上最近点までの距離(ABベクトルの後ろにあるときはマイナス値)
    let distAX = Vector3_Dot(nAB, ap);
    let abLen  = Vector3_Length(ab);

    //線上最近点
    let ret = new Vector3();
    if(abLen <= distAX) {
        ret = B;
    }
    else if(distAX < 0){
         ret = A;
    }
    else{
        ret.x = A.x + (nAB.x * distAX);
        ret.y = A.y + (nAB.y * distAX);
        ret.z = A.z + (nAB.z * distAX);
    }
    return ret;
}//ClosestPoint