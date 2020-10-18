// テンプレート文字列はバッククオートで書く！！
const name = "mike";
const age = 28;

const message1 = `私の名前は${name}で年齢は${age}です`;
console.log(message1);

// アロー関数
// 従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// returnと{}を省略可能
const func2 = (str) => str;
console.log(func2("func2です"));

// 引数を2つ
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
