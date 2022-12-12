class TransformSystem extends ISystem{
    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    //更新関数
    Update(){
        let entities = this.GetEntity(TransformComponent);
        for(let obj of entities){
            let component = obj.GetComponent(TransformComponent);
        }
    }//function Update
        
    /**事後更新*/
    PostUpdate(){}//function PostUpdate
}//class TransofrmSystem