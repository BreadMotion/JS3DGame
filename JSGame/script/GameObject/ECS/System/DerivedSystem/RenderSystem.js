class RenderSystem extends ISystem{
    /**constructor*/
    constructor(){ super(); }

    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    //更新関数
    Update(){}//function Update
        
    /**事後更新*/
    PostUpdate(){
        let sceneEntity = this.GetSceneEntity();
        let otherEntity = this.GetEntity(CameraComponent);
        const canvas = App.utils[window.canvasID[0]];
        
        if(otherEntity.length == 0) canvas.renderer.render(sceneEntity.scene, sceneEntity.baseCamera);
        else canvas.renderer.render(sceneEntity.scene, otherEntity.GetComponent(CameraComponent).camera);
    }//function PostUpdate
}//class TransofrmSystem