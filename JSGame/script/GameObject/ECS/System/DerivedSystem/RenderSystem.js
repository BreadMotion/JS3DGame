class RenderSystem extends ISystem{
    /**constructor*/
    constructor(){ super(); }//constructor

    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    //更新関数
    Update(){}//function Update
        
    /**事後更新*/
    PostUpdate(){
        this.UpdateGeometry();
        this.Render();
    }//function PostUpdate

    /**THREE.jsのジオメトリトランスフォームの更新*/
    UpdateGeometry(){
        let entities = this.GetEntity("RenderComponent");
        for(const entity of entities){
            let transformComponent = entity.GetComponent(TransformComponent);
            let position = transformComponent.position;
            let renderComponent = entity.GetComponent(RenderComponent);
            
            renderComponent.mesh.position = new THREE.Vector3(position.x,position.y,position.z);
            renderComponent.mesh.rotation = transformComponent.rotation.quaternion;
        }
    }//function UpdateGeometry

    /**描画関数*/
    Render(){
        let sceneEntity = this.GetSceneEntity();
        let sceneCamera = sceneEntity.GetComponent(CameraComponent);
        let otherCamera = this.GetEntity(CameraComponent);
        const canvas = App.utils[window.canvasID[0]];
        //sceneCamera.camera.position.x += 1;
        //sceneCamera.camera.position.y -= 1;
        sceneCamera.camera.position.z -= 1;
        
        if(otherCamera.length == 0) canvas.renderer.render(sceneEntity.scene, sceneCamera.camera);
        else canvas.renderer.render(sceneEntity.scene, otherCamera.camera);
    }//function Render
}//class TransofrmSystem