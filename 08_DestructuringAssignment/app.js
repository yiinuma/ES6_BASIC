// 配列を個々の変数に入れる従来の方法
const fruit = ['Apple', 'Banana'];
const a = fruit[0];
const b = fruit[1];
console.log(a); //Apple
console.log(b); //Banana

// 分割代入
//ES2015から使える、配列やオブジェクトを分解して、個々の値を変数に代入する代入法
const [c, d, e] = fruit;
const [f, g] = ['Kiwi', 'Orange'];
console.log(c); //Apple
console.log(d); //Banana
console.log(e); //Undefined
console.log(f); //Kiwi
console.log(g); //Orange

// オブジェクトの分割代入
const obj = {
  name: '山田',
  age: 24,
  level: 15,
};

const { id, age, name, level } = obj;
console.log(id); //undefined
console.log(name); //山田
console.log(age); //24
console.log(level); //15

//スプレッド構文と組み合わせ
const objSp = {
  nameSp: '飯沼',
  ageSp: 4,
  levelSp: 1,
};

const { nameSp, ...other } = objSp;
console.log(nameSp);
console.log(other);
