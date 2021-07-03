console.log('テンプレート');

// TypeScriptでは、 string や number のようなプリミティブ型は小文字
function add(n1: number, n2: number) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error
  // }
  return n1 + n2
}

// 型推論が効いている場合は、変数に宣言する必要がない
const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);

console.log(result);