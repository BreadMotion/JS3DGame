class VelocityComponent extends IComponent{
    /**constructor
     * @param {Vector3} vec*/
    constructor(vec){
        super();
        
        if(Vector3 == undefined){
            /**@type {Vector3} velocity*/
            this.velocity = new Vector3(0.0, 0.0, 0.0);
        }
        else{
            /**@type {Vector3} velocity*/
            this.velocity = vec;
        }
    }//constructor
}//class TransformComponent