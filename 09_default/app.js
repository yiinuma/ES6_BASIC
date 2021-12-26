// 配列の分割代入にデフォルト値を設定
const fruit = ['Apple', 'Banana'];
const [a, b, c = 'Cherry'] = fruit;
console.log(a); //Apple
console.log(b); //Banana
console.log(c); //Cherry

// オブジェクトの分割代入にデフォルト値を設定
const obj = {
  name: '山田',
  age: 24,
  level: 15,
};
const { id = 1, age, name, level } = obj;
console.log(id); //1
console.log(name); //山田
console.log(age); //24
console.log(level); //15

// 関数のデフォルト引数
const areaOfTriangle = (base, height = 10) => {
  return (base * height) / 2;
};
const result = areaOfTriangle(100, 5);
console.log(result); //250

const resultDefault = areaOfTriangle(100);
console.log(resultDefault); //500
