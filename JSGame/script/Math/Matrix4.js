//4x4正方行列
class Matrix{
    /**constructor
     * @param {THREE.Matrix4 | number...} - 4x4行列の各要素*/
    constructor(
        m11,m12,m13,m14,
        m21,m22,m23,m24,
        m31,m32,m33,m34,
        m41,m42,m43,m44
    )
    {
        this.matrix = new THREE.Matrix4();

        if(m11 === THREE.Matrix4x4){
            this.matrix = m11;
        }
        else if(m11 === Number){
            this.matrix.set(
                m11,m12,m13,m14,
                m21,m22,m23,m24,
                m31,m32,m33,m34,
                m41,m42,m43,m44
            );
        }
    }//constructor

    /**加算
     * @param {Matrix} matrix - 正方行列行列４ */
    Add(matrix){
        this.matrix += matrix.matrix;  return this;
    }//Add

    /**減算
     * @param {Matrix} matrix - 正方行列行列４ */
    Sub(matrix){
        this.matrix -= matrix.matrix; return this;
    }//Sub

    /**積算
     * @param {Matrix} matrix - 正方行列行列４*/
    Mul(matrix){
        this.matrix *= matrix.matrix; return this;
    }//Mul

    /**除算
     * @param {Matrix} matrix - 正方行列行列４*/
    Div(matrix){
        this.matrix /= matrix.matrix; return this;
    }//Div
}//class Matrix

/**加算
 * @param {Matrix} mat1 - ベクトル 
 * @param {Matrix} mat2 - ベクトル
 * @return {Matrix}*/
function Vector3_Add(mat1,mat2){
    return new Matrix(mat1 + mat2);
}//Vector3_Add

/**減算
* @param {Matrix} vec1 - ベクトル 
* @param {Matrix} mat2 - ベクトル
* @return {Matrix}*/
function Vector3_Sub(mat1,mat2){
    return new Matrix(mat1 - mat2);
}//Vector3_Sub

/**積算
 * @param {Matrix} vec1 - ベクトル 
 * @param {Matrix} mat2 - ベクトル
 * @return {Matrix}*/
function Vector3_Mul(mat1,mat2){
    return new Matrix(mat1 * mat2);
}//Vector3_Mul

/**除算
 * @param {Matrix} mat1 - ベクトル 
 * @param {Matrix} mat2 - ベクトル
 * @return {Matrix}*/
function Vector3_Div(mat1,mat2){
    return new Matrix(mat1 / mat2);
}//Vector3_Div