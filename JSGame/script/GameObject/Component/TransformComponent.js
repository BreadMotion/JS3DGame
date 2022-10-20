/**座標を付与する。　固有値等による空間の違いがない為ダーティーフラグ等は不要とみなした設計*/
class TransformComponent extends IComponent{
    /**@return {number} 二次元座標*/
    get Position(){
        return this.position;
    }//Position

    /**@return {angle} 角度*/
    get Angle(){
        return this.angle;
    }//Angle
    
    /**constructor*/
    constructor(owner,ary){
        super(owner);
        this.position = new Vector2(ary.shift(),ary.shift());
        this.angle = ary.shift();
    }//constructor

    //-----------------------override method------------------//
}//class TransformComponent