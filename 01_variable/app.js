// 従来の変数
var a = 'varで宣言';

// let
let b = 'letで宣言';

// const
const c = 'constで宣言';
console.log(a);
console.log(b);
console.log(c);

// 再宣言
var a = 'varを再宣言';
// let b = 'letを再宣言'; //Uncaught SyntaxError: Identifier 'b' has already been declared
// const c = 'constを再宣言'; //Uncaught SyntaxError: Identifier 'c' has already been declared
console.log(b);
console.log(c);
