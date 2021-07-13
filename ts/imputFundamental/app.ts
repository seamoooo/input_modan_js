function ad(n1: number, n2: number): number {
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

combinValue = ad
// エラーになる
// combinValue = printNumber

// コールバック関数側で関数の定義を行っている
// コールバックのvoid側は返り値の値を利用しないことで、
// 渡される関数が引数を利用しないという意味ではない
function adAndHandle ( n1: number, n2: number, cb:(num:number) => void) {
  const result = n1 + n2;
  cb(result);
}

adAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
})

console.log(combinValue(8,8));
printNumber(ad(5,12))

// any unkouwnの違い
// any は型チェックをしない宣言
// unkownは型が何になるかが不明な宣言

let test: unknown;
let hoge: string;

test = "hoge"
hoge = "hoge"

// 型定義を行っているものへの際代入はできなくなるので、可能であればunkouwnを使用する
// Type 'unknown' is not assignable to type 'string'
// hoge = test

// never voidの違い
// voidはretrunを返さない宣言
// neverは値を返さないことを明示する //無限ループとかエラー関数とか途中で関数がクラッシュする場合