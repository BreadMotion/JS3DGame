//--------------------------Biology Actor Generator--------------------------//
/**プレイヤーアクターの生成
 * @param {number} x - 生成座標X
 * @param {number} y - 生成座標Y
 * @param {number} angle - 生成角度
 * @param {number} drawPrimary - 描画優先順位*/
 function GeneratePlayerActor(x=0,y=0,angle=0,drawPrimary){
    const playerData = AppData.Player;
    let actor = CreateActor(x,y,angle);
    AddCharactorComponent(
        actor,  App.context, 
        playerData.imageWidth, playerData.imageHeight,
        playerData.scaleX,     playerData.scaleY,
        playerData.imagePath,
        (drawPrimary != undefined ? drawPrimary:data.drawPrimary), canRot);

    actor.Initialize();
    actor.PostInitialize();
    return actor;
}//function GeneratePlayerActor