/**シーンオブジェクト　タイトル*/
class Title extends IScene {
    /**constructor*/
    constructor(){
        super();
        /**@type {number} シーン開始時間*/
        this.startTime = 0;

        /**@type {number} 所有しているクラスインスタンスに訪れた回数*/
        this.visitsNum = 0;
    }//constructor

    /**シーンの変更の条件を満たしたか調べる
     * @param {number} time - シーンの経過時間*/
    CheckChangeScene(time){
        if(Date.now() > (1000 + this.startTime) && window.isKeyDown.key_Enter == true){
            SceneManager.Use('Game');
            this.startTime = 0;
        }
    }//function CheckChangeScene

    /**エンティティを構築*/
    GenerateEntityAtSceneStart(){
        SystemManager.Initialize();
        EntityManager.Initialize();

        SystemManager.AddSystem(new RenderSystem());
        SystemManager.AddSystem(new MovementSystem());

        const geoEntity = EntityManager.AddEntity();
        new VelocityComponent(new Vector3(0.0, 0.0, 0.0)).AttachTo(geoEntity);
        new GeometryComponent(new THREE.BoxGeometry(400,400,400), new THREE.MeshNormalMaterial()).AttachTo(geoEntity);

        const ambLightEntity = EntityManager.AddEntity();
        new AmbientLightComponent(0xFFFFFF, 1.0).AttachTo(ambLightEntity);
    }//function GenerateActorAtSceneStart

    //-----------------------override method------------------//
    /**初期化　オーバーライド*/
    Initialize(){
        this.visitsNum++;
        this.GenerateEntityAtSceneStart();
        this.startTime = Date.now();
    }//Initialize

    /**更新　オーバーライド*/
    Update(time){
        SystemManager.Update();
        //this.CheckChangeScene(time);
    }//Update

    /**終了処理　オーバーライド*/
    Finalize(){}//Finalize
}//class Title