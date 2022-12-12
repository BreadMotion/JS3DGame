class Quaternion{
    /**constructor
     * @param {Vector3 | THREE.Quaternion} vec
     * @param {number} angle*/
    constructor(vec,angle){
        this.quaternion = new THREE.Quaternion();

        if(vec === Vector3){
            this.quaternion.setFromAxisAngle(new new THREE.Vector3(vec.x,vec.y,vec.z), angle);
        }
        else if(vec === THREE.Quaternion){
            this.quaternion = vec;
        }
    }//constructor

    /**加算
    * @param {Quaternion} q - 三次元ベクトル */
    Add(q){
        this.quaternion += q; return this;
    }//Add
    
    /**減算
    * @param {Quaternion} q - 三次元ベクトル */
    Sub(q){
        this.quaternion -= q; return this;
    }//Sub
    
    /**積算
    * @param {Quaternion} q - 三次元ベクトル*/
    Mul(q){
        this.quaternion *= q; return this;
    }//Mul
    
    /**除算
    * @param {Quaternion} q - 三次元ベクトル*/
    Div(q){
        this.quaternion /= q; return this;
    }//Div
}//class Quaternion

/**加算
 * @param {Quaternion} q1 - ベクトル 
 * @param {Quaternion} q2 - ベクトル
 * @return {Quaternion}*/
function Quaternion_Add(q1,q2){
    return new Quaternion(q1.quaternion + q2.quaternion);
}//Vector3_Add

/**減算
* @param {Quaternion} q1 - ベクトル 
* @param {Quaternion} q2 - ベクトル
* @return {Quaternion}*/
function Quaternion_Sub(q1,q2){
    return new Quaternion(q1.quaternion - q2.quaternion);
}//Vector3_Sub

/**積算
 * @param {Quaternion} q1 - ベクトル 
 * @param {Quaternion} q2 - ベクトル
 * @return {Quaternion}*/
function Quaternion_Mul(q1,q2){
    return new Quaternion(q1.quaternion * q2.quaternion);
}//Vector3_Mul

/**除算
 * @param {Quaternion} q1 - ベクトル 
 * @param {Quaternion} q2 - ベクトル
 * @return {Quaternion}*/
function Quaternion_Div(q1,q2){
    return new Quaternion(q1.quaternion / q2.quaternion);
}//Vector3_Div