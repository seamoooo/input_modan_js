function add(n1: number, n2: number): number {
  return n1 + n2;
}

// 何も返さないという意味 関数がreturn命令を持たないこと
// undfinedを返すということを意味する
function printNumber(number: number):void {
  console.log('result' + number)
}

// 後から破壊的な変更ができてしまうのを防止する
// 戻り値と引数にアロー関数形式で指定する
let combinValue: (a: number, b: number) => number;

combinValue = add
// エラーになる
// combinValue = printNumber

// コールバック関数側で関数の定義を行っている
// コールバックのvoid側は返り値の値を利用しないことで、
// 渡される関数が引数を利用しないという意味ではない
function addAndHandle ( n1: number, n2: number, cb:(num:number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
})

console.log(combinValue(8,8));
printNumber(add(5,12))