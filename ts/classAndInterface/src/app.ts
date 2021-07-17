// インターフェイスにはオブジェクトの構造のみをかく
// 実装を持たない

interface Named {
  readonly age: number;
}

// 継承して、複数のineterfaceを合わせることができる
interface Greetable extends Named{
  // 初期化の際に一度だけ読み込まれる
  // public,privateは利用できない
  readonly name: string;
  // オブショナるの定義 必須じゃなく設定できる
  // 引数等でも使用できる
  outpName?: string;

  greet(phrase: string): void;
}

// 一つのクラスに対して、複数のinterfaceを使用きる
// implements 実装する
// interfaceに含まれていないpropatyを追加することは問題ない
class Person implements Greetable {
  name: string;
  age = 30;
  constructor(name: string){
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + this.name)
  }
}


// 関数のinterface宣言
interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;

add = (n1: number, n2: number) => {
  return n1 + n2
}