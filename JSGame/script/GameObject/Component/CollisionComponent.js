/**コリジョンの形の列挙*/
const COLLISION_TYPE = {
    CIRCLE : 0,
    REACT  : 1
};//var COLLISION_TYPE

/**コリジョンの種族の列挙*/
const RASE_TYPE = {
    PLAYER : 0,
    ENEMY : 1,
    ITEM : 2,
    PLAYER_BULLET : 3,
    ENEMY_BULLET : 4
};//const RAsE_TYPE

/**円と円の当たり判定
 * @param {number} x1 - 座標X
 * @param {number} y1 - 座標Y
 * @param {number} radius1 - 半径
 * @param {number} x2 - 座標X
 * @param {number} y2 - 座標Y
 * @param {number} radius2 - 半径*/
function CircleVSCircle(x1, y1, radius1, x2, y2, radius2){
    let vec = new Vector2(x2 - x1, y2 - y1);
    let rlength = Vector2_Length(vec);
    let radiusTotal = radius1 + radius2;

    if(rlength < radiusTotal) return [true, radiusTotal - rlength, Vector2_Normalize(vec)];
    return [false,0,new Vector2(0,0)];
}//CircleVsCircls

/**円と矩形の当たり判定
 * @param {number} x1 - 座標X
 * @param {number} y1 - 座標Y
 * @param {number} len1 - 半径
 * @param {number} x2 - 座標X
 * @param {number} y2 - 座標Y
 * @param {number} width - 矩形の幅
 * @param {number} height - 矩形の高さ*/
function CircleVsBox(x1, y1, len1, x2, y2, width, height){
    let b1 = new Vector2(x2 + width, y2 + height);

    let len1Square = len1 * len1;

    let val1 = y2 - y1;
    let val5Square = val1 * val1;

    let val2 = x2 - x1;
    let val6Square = val2 * val2;

    let val3 = v2.x - x1;
    let val7Square = val3 * val3;

    if     ((x1 > x2) && (x1 < b1.x) && (y1 > y2 - len1) && (y1 < b1.y + len2)) return true;
    else if((x1 > x2 - len1) && (x1 < b1.x + len1) && (y1 > y2) && (y1 < b1.y)) return true;
    else if((val6Square + val5Square) < len1Square) return true;
    else if((val7Square + val5Square) < len1Square) return true;
    else if((val7Square + val5Square) < len1Square) return true;
    else if((val6Square + val5Square) < len1Square) return true;

    return false;
}//CircleVsBox

/**カプセルと円の当たり判定*/
function CapsuleVsCircle(cb1, ct1, clen, spos, slen){
    let vc = Vector2_Sub(cb1, ct1);
    let len = Vector2_Length(vc);

    let closest = ClosestPoint();

    let rv = Vector2_Sub(spos, closest);

    if(Vector2_Length(rv) < clen + slen) return true;
    return false;
}//CapsuleVsCircle

/**当たり判定に使うデータを持つコンポーネント*/
class CollisionComponent extends IComponent{
    /**constructor
     * @param {Actor} owner - 所有する予定のアクター
     * @param {number} x - 相対座標X
     * @param {number} y - 相対座標Y
     * @param {number} angle - 相対角度
     * @param {number} radius - 半径
     * @param {number} raseType - 種族値*/
    constructor(owner,ary){
        super(owner);

        /**@type {TransformComponent} 所有者の座標*/
        this.transform = owner.GetComponent('TransformComponent');
        
        /**@type {Vector2} 相対座標*/
        this.relativePosition = new Vector2(ary.shift(),ary.shift());
        
        /**@type {number} 相対角度*/
        this.angle = ary.shift();
        
        /**@type {number} 半径*/
        this.radius = ary.shift();
        
        /**@type {number} 種族の種類*/
        this.raseType = ary.shift();
        
        /**@type {number} コリジョンのタイプ*/
        this.collisionType = COLLISION_TYPE.CIRCLE;
    }//Constructor

    /**別の取得値を持つコリジョンと当たり判定
     * @param {CollisionComponent} otherCol - 別インスタンスのコリジョン*/
    VsOtherColHitCheck(otherCol){
        //同じ種族なら当たっていない判定
        if(this.raseType == otherCol.raseType) {
             return [false, 0, new Vector2(0,0)];
        }

        return CircleVSCircle(
            this.transform.position.x,
            this.transform.position.y,
            this.radius,
            otherCol.transform.position.x,
            otherCol.transform.position.y,
            otherCol.radius
        );
    }//HitCheck

    /**コリジョンのデバッグ描画*/
    DebugDraw(){
        let angle1 = this.transform.angle + this.angle;
        let vec1 = new Vector2(Math.cos(angle1),Math.sin(angle1));
        vec1.x *= this.relativePosition.x;
        vec1.y *= this.relativePosition.y;

        App.Util.DrawCircle(
            this.transform.position.x + vec1.x,this.transform.position.y + vec1.y,
            this.radius,'#ffffff');
    }//DebugDraw
}//class CollisionComponent

/**アクターにコリジョンを付与する
 * @param {Actor} owner - 所有する予定のアクター
 * @param {number} x - コリジョンの相対座標
 * @param {number} y - コリジョンの相対座標
 * @param {number} angle - コリジョンの角度
 * @param {number} radius - コリジョンの半径
 * @param {number} raseType - 種族値*/
function AddCollisionComponent(owner,x,y,angle,radius,raseType){
    owner.AddComponent('CollisionComponent',x,y,angle,radius,raseType);
}//function AddCollisionComponent