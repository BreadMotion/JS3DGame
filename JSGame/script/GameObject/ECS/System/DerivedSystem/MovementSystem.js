class MovementSystem extends ISystem{
    /**constructor*/
    constructor(){ super(); }

    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    //更新関数
    Update(){
        let entities = this.GetEntity(VelocityComponent);
        for(let obj of entities){
            let transform = obj.GetComponent(TransformComponent);
            let velocity = obj.GetComponent(VelocityComponent);

            transform.position.x += velocity.velocity.x;
            transform.position.y += velocity.velocity.y;
        }
    }//function Update
        
    /**事後更新*/
    PostUpdate(){}//function PostUpdate
}//class TransofrmSystem