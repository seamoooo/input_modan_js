// アロー関数
const printNumber: (output: string | number) => void = output => {
  console.log(output);
}
printNumber('hoge')

// デフォルト値のある関数

// デフォルト値のあるパラメータはは右側しか渡すことができない
// デフォルト値があるかによらず、値をスキップできない
const add = (a : number, b: number = 1) => a + b;
// デフォルト値があるため、引数が1つで呼び出すことができる
printNumber(add(2))


// スプレッド構文
const　hobbies = [ 'cooking', 'swim', 'food']
const activateHobboes = ['Hiking'];

// 定数だけど値をpushで追加できるのは、オブジェクト、配列は
// 参照先のアドレスが変わらなければ良い
// オブジェクトでもおK
activateHobboes.push(...hobbies)

// レストパラメーター
// 任意の数の引数に対応するようにする
// 配列のみ
const added = (...numbers:number[]) => {
  //  reduce 配列に対して共通の処理を行う
  //  resuce(コールバック関数,初期値)を渡す
  return numbers.reduce((curResult, curValue) => {
    return curValue + curResult;
  }, 0);
}

const addedNumber  = added(1,2,10,230,)
console.log(addedNumber)

// 分割代入 配列、オブジェクト
// const [代入先] = 分割したい配列
// const {} = 分割したいオブジェクト
const [hobby1, hobby2, ...extrahobby] = hobbies
