/**
 * Functionを利用してコード評価を実施する関数
 * @param {string} classname - 取得したい型の名前
*/
//Functionを利用してコード評価を実施する関数
function GetClass(classname){
     return Function('return (' + classname + ')')(); 
}//function GetClass

//使用例
/**
 * let class2 = GetClass("SampleClass");
 * 
 * let classobj2 = newclass2();
 * classobj2 instanceof SampleClass > true
 */