"use strict";
console.log('テンプレート');
// TypeScriptでは、 string や number のようなプリミティブ型は小文字
function added(n1, n2) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error
    // }
    return n1 + n2;
}
// 型推論が効いている場合は、変数に宣言する必要がない
var num1 = 5;
var num2 = 2.8;
var result = added(num1, num2);
console.log(result);
