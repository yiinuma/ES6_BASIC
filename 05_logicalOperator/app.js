const a = 3;
const b = -2;

//&& AND
console.log(a > 0 && b > 0); //false

//\\ OR
console.log(a > 0 || b > 0); //true

// ?? Null合体
let myText = ''; // An empty string (which is also a falsy value)

// || が論理演算子であるため、左辺の値は評価によって強制的にブール値になり、falsy な値は返さない
let notFalsyText = myText || 'Hello world';
console.log(notFalsyText); // Hello world

// Null 合体演算子は、左辺の値が null もしくは undefined のどちらか (その他の falsy な値は含みません)
// に評価された場合にのみ右辺の値を返す
let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)

// 三項演算子
const age = 26;
const beverage = age >= 20 ? 'ビール' : 'ジュース';
console.log(beverage); // "ビール"
