class TransformComponent extends IComponent{
    /**constructor
     * @param {Vector3} vec
     * @param {Quaternion} quaternion
    */
    constructor(vec, quaternion){
        super();

       /**@type {Vector3} position*/
       this.position = new Vector3(vec.x,vec.y,vec.z);

       /**@type {Quaternion} quaternion*/
       this.quaternion = new Quaternion(quaternion);
    }//constructor
}//class TransformComponent