//--------------------------Biology Actor Generator--------------------------//
/**プレイヤーアクターの生成
 * @param {number} x - 生成座標X
 * @param {number} y - 生成座標Y
 * @param {number} angle - 生成角度
 * @param {number} drawPrimary - 描画優先順位*/
 function GeneratePlayerActor(x=0,y=0,angle=0,drawPrimary){
    const player = AppData.Player;
    var actor = CreateActorHaveCharactor(x,y,angle,player.name,App.context,drawPrimary);

    actor.Initialize();
    actor.PostInitialize();
    return actor;
}//function GeneratePlayerActor