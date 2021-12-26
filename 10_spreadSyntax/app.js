// 関数呼び出しでの展開
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6

// new演算子の適用
// Dateオブジェクトの引数を配列で指定する　年月（０スタート）日時分秒
const birthday = new Date(2021, 11, 26, 15, 16, 0);
console.log(birthday); //Sun Dec 26 2021 15:16:00 GMT+0900 (日本標準時)

// 配列を展開して代入していないのでエラーとなる
// const newBirthday = new Date(date); //NG
// console.log(newBirthday); //Invalid Date 向こうな日付
// スプレッド構文 配列を展開した状態になるのでOK
const date = [2021, 11, 26, 15, 16, 0];
const newBirthday2 = new Date(...date);
console.log(newBirthday2); //Sun Dec 26 2021 15:16:00 GMT+0900 (日本標準時)
// --------------------------------------------------------------------------

//配列リテラルでのスプレッド構文
// 配列の複製　参照渡ししない！！
const fruit = ['Apple', 'Banana', 'Cherry'];
const kudamono = [...fruit];
kudamono[2] = 'Kiwi';
console.log(fruit); //['Apple', 'Banana', 'Cherry']
console.log(kudamono); //['Apple', 'Banana', 'Kiwi']

// 分割代入との組み合わせ
const [a, ...other] = fruit;
console.log(a); //Apple
console.log(other); //['Banana', 'Cherry']
// --------------------------------------------------------------------------

//オブジェクトリテラルでのスプレッド構文
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
console.log(clonedObj); // Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Object { foo: "baz", x: 42, y: 13 }
