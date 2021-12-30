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

const CStartPlayer = new CPlayer('山田', 'セカンド');
CStartPlayer.CSayHello();

// 継承 親クラスのメソッドを呼び出す
// 親のクラスに定義されているメソッドを呼び出すことができる
// class クラス名 extends 親のクラス名{
//   //クラスに定義したいプロパティやメソッド
//   constructor(引数) {
//     super(引数)
//   }
//   メソッド名(引数) {
//     super.親のメソッド名(引数)
//   }
// }
class Women extends CPlayer {
  constructor(name, position, number) {
    super(name, position);
    this.number = number;
  }
  // オーバーライト
  CSayHello() {
    console.log(`うちは、${this.position}の${this.name}で、背番号は${this.number}よ`);
  }
}

const womenPlayer = new Women('レイナ', 'ファースト', 2);
womenPlayer.CSayHello(); //うちは、ファーストのレイナで、背番号は2よ