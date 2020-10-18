// テンプレート文字列はバッククオートで書く！！
// const name = "mike";
// const age = 28;

// const message1 = `私の名前は${name}で年齢は${age}です`;
// console.log(message1);

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// アロー関数
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // console.log(func2("func2です"));

// // returnと{}を省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // 引数を2つ
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// 分割代入 オブジェクト編
// 毎回myProfileと書くのはめんどくさい
// const myProfile = {
//   name:"john",
//   age:28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳
// です`;
// console.log(message1);

// // 取り出すものを定義する
// const { name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳
// です`;
// console.log(message2);

// 分割代入　配列編
const myProfile = ["john", 28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。}`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}で、年齢は${age}です`;
console.log(message4);
