// 独自関数
// function areaOfTriangle(base, height) {
//   return (base * height) / 2;
// }

// const result = areaOfTriangle(10, 5);
// console.log(result); //25

// 無名関数
const areaOfTriangle = function (base, height) {
  return (base * height) / 2;
};
const result = areaOfTriangle(10, 5);
console.log(result); //25

// アロー関数
const areaOfTriangle2 = (base, height) => {
  return (base * height) / 2;
};
const result2 = areaOfTriangle2(100, 5);
console.log(result2); //250

// アロー関数・引数がない場合
const sayHello = () => 'Hello';
console.log(sayHello());

// アロー関数・引数が１つの場合()なしでもOK
const sayName = name => console.log('Hello ' + name);
sayName('Yoshi');
