/**画像を所有するコンポーネント*/
class CharactorComponent extends IComponent{
    /**
     * constructor
     * @param {Actor} owner - 付与対象アクター
     * @param {CanvasRenderingContext2D} context - キャンバスのコンテキスト
     * @param {number} width - 画像の幅
     * @param {number} height - 画像の高さ
     * @param {number} sizeX - 画像の幅サイズ
     * @param {number} sizeY - 画像の縦サイズ
     * @param {string} imagePath - 画像の相対パス
     * @param {number} drawPrimary - 描画優先順位
     * @param {number} canrot - 回転して描画するか*/
    constructor(owner,ary){
        super(owner);
        this.context = ary.shift();
        this.width   = ary.shift();
        this.height  = ary.shift();
        this.sizeX   = ary.shift();
        this.sizeY   = ary.shift();
        this.ready   = false;
        this.imagePath = ary.shift();
        
        const filepath = this.imagePath;
        //リソースが存在する場合
        if(TextureData[filepath] != null){
            this.ready = true;
            this.image = TextureData[filepath];
        }
        //無い場合
        else{
            this.image = new Image();
            this.image.addEventListener('load',()=>{this.ready=true;}, false);
            this.image.src = filepath;
            TextureData[filepath] = this.image;
        }

        this.drawPrimary = ary.shift();
        this.canRotateFlag = ary.shift();
        this.transform = this.owner.GetComponent('TransformComponent');
    }//constructor

    /**回転無しの描画関数*/
    Draw(){
        if(this.ready == false) { return; }
        this.context.save();
        let offsetX = this.width / 2;
        let offsetY = this.height / 2;
        this.context.scale(this.sizeX,this.sizeY);
        this.context.drawImage(
            this.image,
            this.transform.position.x - offsetX,
            this.transform.position.y - offsetY,
            this.width,this.height
        );
        this.context.restore();
    }//Draw

    /**回転できる描画関数*/
    RotationDraw(){
        if(this.ready == false) { return; }
        this.context.save();
        this.context.translate(this.transform.position.x, this.transform.position.y);
        this.context.rotate(this.transform.angle - Math.PI * 1.5);
        this.context.scale(this.sizeX,this.sizeY);

        let offsetX = this.width / 2;
        let offsetY = this.height / 2;

        this.context.drawImage(
            this.image,
            -offsetX,-offsetY,
            this.width, this.height
        );
        this.context.restore();
    }//RotationDraw
}//class CharactorComponent

/**画像読み込み関数
 * @param {String} path - 画像の相対パス*/
function LoadImageFunc(path){
    let ready = false;
    //リソースが存在する場合
    if(TextureData[path] != null){
        image = TextureData[path];
        return true;
    }
    //無い場合
    else{
        var image = new Image();
        image.addEventListener('load',()=>{ready = true}, false );
        image.src = path;
        TextureData[path] = image;
        return ready;
    }
}//function LoadImageFunc

/**CharactorComponentを付与する
 * @param {Actor} owner - 付与対象アクター
 * @param {CanvasRenderingContext2D} context - キャンバスのコンテキスト
 * @param {number} width - 画像の幅
 * @param {number} height - 画像の高さ
 * @param {String} filepath - 画像の相対パス
 * @param {number} drawPrimary - 描画優先順位
 * @param {boolean} canRot - 回転して描画するか*/
function AddCharactorComponent(owner,context,width,height,filepath,drawPrimary,canRot=true){
    owner.AddComponent(
        'CharactorComponent', context,width,height,filepath,drawPrimary,canRot
    );
}//function AddCharactorComponent