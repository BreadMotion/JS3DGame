/**ロードした画像の格納場所*/
var TextureData = [];

/**画像ファイルのディレクトリ*/
const FilePath=[
    './image/nabe00.png',
    './image/nabe01.png',
    './image/texture00.png',
    './image/texture01.png',
    './image/texture02.png',
    './image/boss.png',
    './image/enemy_large.png',
    './image/enemy_shot.png',
    './image/enemy_small.png',
    './image/homing_shot.png',
    './image/viper.png',
    './image/viper_shot.png',
    './image/viper_single_shot.png',
    './image/player_shot.png'
];

/**メインキャンバスのグラデーションレート*/
var gradationValue = 0;

/**アプリケーションで使用されるゲームオブジェクトのデータ一覧(ほんとはJSONに格納したい)*/
const AppData = {
    'Nabe0': {
        name:'Nabe0',
        imagePath:FilePath[0],
        imageWidth: 256,
        imageHeight: 256,
        scaleX:0.3,
        scaleY:0.3,
        drawPrimary: 0,
        hp:10,
        canDestroy:true
    },
    'Nabe1': {
        name:'Nabe1',
        imagePath:FilePath[1],
        imageWidth: 256,
        imageHeight: 256,
        scaleX:0.3,
        scaleY:0.3,
        drawPrimary: 0,
        hp:10,
        canDestroy:true
    },
    'Kani': {
        name:'Kani',
        imagePath:FilePath[2],
        imageWidth: 256,
        imageHeight: 256,
        scaleX:0.3,
        scaleY:0.3,
        drawPrimary: 0,
        hp:10,
        canDestroy:true
    },
    'Tako': {
        name:'Tako',
        imagePath:FilePath[3],
        imageWidth: 256,
        imageHeight: 256,
        scaleX:0.3,
        scaleY:0.3,
        drawPrimary: 0,
        hp:10,
        canDestroy:true
    },
    'Ika': {
        name:'Ika',
        imagePath:FilePath[4],
        imageWidth: 256,
        imageHeight: 256,
        scaleX:0.3,
        scaleY:0.3,
        drawPrimary: 0,
        hp:10,
        canDestroy:true
    },
    'Boss': {
        name:'Boss',
        imagePath:FilePath[5],
        imageWidth: 128,
        imageHeight: 128,
        scaleX:1,
        scaleY:1,
        drawPrimary: 4,
        hp:1000,
        canDestroy:true
    },
    'EnemyL': {
        name:'EnemyL',
        imagePath:FilePath[6],
        imageWidth: 64,
        imageHeight: 64,
        scaleX:1,
        scaleY:1,
        drawPrimary: 3,
        hp:50,
        canDestroy:true
    },
    'EnemyBullet': {
        name:'EnemyBullet',
        imagePath:FilePath[7],
        imageWidth: 32,
        imageHeight: 32,
        scaleX:1,
        scaleY:1,
        drawPrimary: 2,
        hp:1,
        canDestroy:true
    },
    'EnemyS': {
        name:'EnemyS',
        imagePath:FilePath[8],
        imageWidth: 48,
        imageHeight: 48,
        scaleX:1,
        scaleY:1,
        drawPrimary: 3,
        hp:30,
        canDestroy:true
    },
    'HomingShot': {
        name:'HomingShot',
        imagePath:FilePath[9],
        imageWidth: 32,
        imageHeight: 32,
        scaleX:1,
        scaleY:1,
        drawPrimary: 2,
        hp:1,
        canDestroy:true
    },
    'Player': {
        name:'Player',
        imagePath:FilePath[10],
        imageWidth: 64,
        imageHeight: 64,
        scaleX:1,
        scaleY:1,
        drawPrimary: 5,
        hp:100,
        canDestroy:true
    },
    'PlayerShot': {
        name:'PlayerShot',
        imagePath:FilePath[11],
        imageWidth: 32,
        imageHeight: 32,
        scaleX:1,
        scaleY:1,
        drawPrimary: 1,
        hp:1,
        canDestroy:true,
        speed:20
    },
    'PlayerShotS': {
        name:'PlayerShotS',
        imagePath:FilePath[12],
        imageWidth: 32,
        imageHeight: 32,
        scaleX:1,
        scaleY:1,
        drawPrimary: 1,
        hp:1,
        canDestroy:true,
        speed:20
    },
    'PlayerExp': {
        name:'PlayerExp',
        imagePath:FilePath[13],
        imageWidth: 32,
        imageHeight: 32,
        scaleX:1,
        scaleY:1,
        drawPrimary: 1,
        hp:1,
        canDestroy:true,
        speed:20
    },
    'PlayerCheeze':{
        name:'PlayerCheeze',
        imagePath : FilePath[13],
        imageWidth : 32,
        imageHeight : 32,
        scaleX : 2,
        scaleY : 2,
        drawPrimary : 1,
        hp : 1,
        canDestroy : false,
        speed : 1
    },
    'PlayerShotLineUI': {
        name:'PlayerShotLineAI',
        MaxLen: 700,
        MinLen: 50,
        width:5,
        color: '#ffffff'
    },
    'PlayerShotCircleUI': {
        name:'PlayerShotCircleUI',
        radius: 540,
        color: 'rgb(30,30,60)'
    },
    'PlayerShotFanUI': {
        name:'PlayerShotFanUI',
        radius: 30,
        angle: 2.8,
        color: '#ffffff'
    }
};