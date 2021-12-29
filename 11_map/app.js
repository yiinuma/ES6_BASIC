// map 配列から別の配列を作る
// Map オブジェクトはキーと値のペアを保持し、キーが最初に挿入された順序を覚えています
// キーや値には任意の値(オブジェクトとプリミティブ値)を使用することができます
// 配列から全ての要素に対して処理を適用し、別の配列を作成できる
// 配列名.map(コールバック関数)

const playerList = [
  {
    name: '塩見',
    number: 9,
    position: 'センター',
  },
  {
    name: '青木',
    number: 12,
    position: 'レフト',
  },
  {
    name: '山田',
    number: 1,
    position: 'セカンド',
  },
];

const playerName = playerList.map((val, key) => `${key + 1}番は${val.name}選手です`);
console.log(playerName); //['1番は塩見選手です', '2番は青木選手です', '3番は山田選手です']

// forEachだと１つずつ取り出せる
playerList.forEach((val, key) => {
  console.log(`${key + 1}番は${val.name}選手です`);
});
// 1番は塩見選手です
// 2番は青木選手です
// 3番は山田選手です

// DOMの生成
const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-positionList');

btn.addEventListener('click', () => {
  let output = '';
  playerList.forEach((val, key) => {
    output += `<li>${key + 1}番${val.position}${val.name} 背番号${val.number}</li>`;
  });
  list.innerHTML = output;
});

// ------------------------------------------------------------------------------
// filter 配列から条件に一致する配列を作る
// 配列から条件に一致する要素に処理を適用し、別の配列を作成できる
// 配列名.filter(コールバック関数)

const smallNumber = playerList.filter((val) => val.number <= 10);

smallNumber.forEach((val) => {
  console.log(val);
  // {name: '塩見', number: 9, position: 'センター'}
  // {name: '山田', number: 1, position: 'セカンド'}
});

// ------------------------------------------------------------------------------
// reduce 配列から単一の値を取り出す
// 配列全体から単一の値を生成するメソッド
// 直前の要素における計算結果の返値を渡す
// 配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になる
// 配列名.reduce(コールバック関数,初期値)

const totalNumber = playerList.reduce((prev, current) => {
  return prev + current.number;
}, 0); //prevの初期値=0
console.log(`選手の背番号合計は${totalNumber}です`); //22
