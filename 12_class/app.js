// 従来の書き方
function Player(name, position) {
  this.name = name;
  this.position = position;
}

Player.prototype.sayHello = function () {
  console.log(`私は、${this.position}の${this.name}だ`);
};

const startPlayer = new Player('山田', 'セカンド');
startPlayer.sayHello();

// Class構文
// ES2015よりJavaScriptにもClass構文が追加された。
// ただし、あくまでプロトタイプベース継承の糖衣構文。
// class クラス名 {
//   //クラスに定義したいプロパティやメソッド
//   constructor(引数) {
//     //初期化処理
//   }
//   メソッド名(引数) {
//     //実行する処理
//   }
// }
class CPlayer {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  CSayHello() {
    console.log(`私は、${this.position}の${this.name}だ`);
  }
}

const CStartPlayer = new CPlayer('山田', 'セカント');
CStartPlayer.CSayHello();
