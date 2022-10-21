/** Functionを利用してコード評価を実施する関数
 * @param {string} classname - 取得したい型の名前 */
function GetClass(classname){
     return Function('return (' + classname + ')')(); 
}//function GetClass

/**使用例
 * let class2 = GetClass("SampleClass");
 * 
 * let classobj2 = newclass2();
 * classobj2 instanceof SampleClass > true */

 function castToFish(animalObject) {
     return Object.assign(new FishObject(),  animalObject)
}

/** クラスオブジェクトのキャスト(ダウンキャスト専用) - 実体はコピーになるので、参照値を持っている変数は別物になる。
 * ポリモーフィズムなオブジェクトかのチェックが必要(Typesriptなら簡単)
 * @param {String} classname - キャスト先のクラスタグ
 * @param {class} classObjectInstance - クラスオブジェクトのインスタンス*/
function DownCastToClassObject(classname, objectInstance){
     return Object.assign(new GetClass(classname), objectInstance);
}// function DownCastToClassObject