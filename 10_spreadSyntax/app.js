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

// 分割代入との組み合わせ
const fruit = ['Apple', 'Banana', 'Cherry'];
const [a, ...other] = fruit;
console.log(a); //Apple
console.log(other); //['Banana', 'Cherry']
