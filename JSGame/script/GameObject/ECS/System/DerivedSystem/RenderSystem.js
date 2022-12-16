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
        let entities = this.GetEntity(GeometryComponent);
        for(const entity of entities){
            let transformComponent = entity.GetComponent(TransformComponent);
            let position = transformComponent.position;
            let quaternion = transformComponent.quaternion.quaternion;
            let geometry = entity.GetComponent(GeometryComponent);
            
            geometry.mesh.position.x = position.x;
            geometry.mesh.position.y = position.y;
            geometry.mesh.position.z = position.z;

            geometry.mesh.rotation.x = quaternion.x;
            geometry.mesh.rotation.y = quaternion.y;
            geometry.mesh.rotation.z = quaternion.z;
            geometry.mesh.rotation.w = quaternion.w;
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
        //sceneCamera.camera.position.z -= 1;
    
        if(otherCamera.length == 0){}
        if(otherCamera.length == 1) canvas.renderer.render(sceneEntity.scene, sceneCamera.camera);
        else canvas.renderer.render(sceneEntity.scene, otherCamera.camera);
    }//function Render
}//class TransofrmSystem