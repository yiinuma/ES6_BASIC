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
