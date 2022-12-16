class MovementSystem extends ISystem{
    /**constructor*/
    constructor(){ super(); }

    /**事前更新*/
    PreUpdate(){}//function PreUpdate

    //更新関数
    Update(){
        this.ReflectVelocity();
        this.ReflectTransformGeometryComponent();
        this.ReflectTransformCameraComponent();
    }//function Update
        
    /**事後更新*/
    PostUpdate(){}//function PostUpdate

    /**速度を反映する*/
    ReflectVelocity(){
        let entities = this.GetEntity(VelocityComponent);
        for(let obj of entities){
            let transformComponent = obj.GetComponent(TransformComponent);
            let velocityComponent = obj.GetComponent(VelocityComponent);

            transformComponent.position.x += velocityComponent.velocity.x;
            transformComponent.position.y += velocityComponent.velocity.y;
        }
    }//function ReflectVelocity

    /**ジオメトリーコンポーネントのメッシュオブジェクトのTransformに反映する*/
    ReflectTransformGeometryComponent(){
        let entities = this.GetEntity(GeometryComponent);
        for(let obj of entities){
            let transformComponent = obj.GetComponent(TransformComponent);
            let meshComponent = obj.GetComponent(GeometryComponent);

            meshComponent.mesh.position.x = transformComponent.position.x;
            meshComponent.mesh.position.y = transformComponent.position.y;
            meshComponent.mesh.position.z = transformComponent.position.z;
        }
    }//function ReflectTransformGeometryComponent

    /**カメラコンポーネントのカメラオブジェクトのTransformに反映する*/
    ReflectTransformCameraComponent(){
        let entities = this.GetEntity(CameraComponent);
        for(let obj of entities){
            let transformComponent = obj.GetComponent(TransformComponent);
            let cameraComponent = obj.GetComponent(CameraComponent);

            cameraComponent.camera.position.x = transformComponent.position.x;
            cameraComponent.camera.position.y = transformComponent.position.y;
            cameraComponent.camera.position.z = transformComponent.position.z;
        }
    }//function ReflectTransformCameraComponent
}//class TransofrmSystem