// 従来の変数
var a = 'varで宣言';
// let
let b = 'letで宣言';
// const
const c = 'constで宣言';
console.log(a); //varで宣言
console.log(b); //letで宣言
console.log(c); //constで宣言

// 再宣言
var a = 'varを再宣言'; //OK
// let b = 'letを再宣言'; //Uncaught SyntaxError: Identifier 'b' has already been declared
// const c = 'constを再宣言'; //Uncaught SyntaxError: Identifier 'c' has already been declared
console.log(a); //varを再宣言
console.log(b); //letで宣言
console.log(c); //constで宣言

// 再代入
a = 'varを再代入'; //OK
b = 'letを再代入'; //OK
// c = 'constを再代入';//Uncaught TypeError: Assignment to constant variable.
console.log(a); //varを再代入;
console.log(b); //letを再代入
console.log(c); //constで宣言

// ブロックのスコープ
if (true) {
  var blockVar = 'ブロック内のvar';
  let blockLet = 'ブロック内のlet';
  const blockConst = 'ブロック内のconst';
  console.log(blockVar); //ブロック内のvar
  console.log(blockLet); //ブロック内のlet;
  console.log(blockConst); //ブロック内のconst;
}
console.log(blockVar); //ブロック内のvar
// console.log(blockLet);//Uncaught ReferenceError: blockLet is not defined
// console.log(blockConst); //Uncaught ReferenceError: blockConst is not defined

// 配列
const args = ['Yakult', 'Swallows', 'Champion'];
//args = ['ヤクルト', '燕', '王者']; //Uncaught TypeError: Assignment to constant variable.
args[1] = '燕'; //OK
console.log(args); //(3) ['Yakult', '燕', 'Champion']

// Object
const obj = {
  team: 'Swallos',
  順位: '1',
};
obj.team = 'ヤクルト'; //OK
console.log(obj); //{team: 'ヤクルト', 順位: '1'}
