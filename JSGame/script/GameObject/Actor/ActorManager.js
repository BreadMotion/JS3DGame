/**マネージャーはシングルトンなのでクラスでは作らない*/
 var ActorManager = {
    /**シーンの実体配列*/
    actors : [],

    /**初期化*/
    Initialize : function(){
        for(const element of this.actors) element.Initialize();
        for(const element of this.actors) element.PostInitialize();
    },//Initialize

    /**更新*/
    Update : function(){
        for(const element of this.actors) element.Update();
    },//Update

    /**事後更新*/
    PostUpdate:function(){
        for(const element of this.actors) element.PostUpdate();
    },//PostUpdate
    
    /**描画*/
    Render : function(){
        for(const element of this.actors) {
            const com = element.GetComponent('CharactorComponent');
            if(com != undefined) { com.RotationDraw(); }
        }
    },//Render

    /**開放*/
    Release : function(){
        delete this.actors;
    },//Release
    
    /**描画優先順位に乗っ取ってアクターの配列を入れ替える*/
    ChangeDrawOrder : function(){
        this.actors.sort((first,second)=>{
            return first.GetComponent('CharactorComponent').drawPrimary 
            - second.GetComponent('CharactorComponent').drawPrimary;
        });
    }//ChangeDrawOrder
}//ActorManager