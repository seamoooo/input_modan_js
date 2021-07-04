function add(n1, n2) {
    return n1 + n2;
}
// 何も返さないという意味 関数がreturn命令を持たないこと
// undfinedを返すということを意味する
function printNumber(number) {
    console.log('result' + number);
}
// 後から破壊的な変更ができてしまうのを防止する
// 戻り値と引数にアロー関数形式で指定する
var combinValue;
combinValue = add;
// エラーになる
// combinValue = printNumber
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
console.log(combinValue(8, 8));
printNumber(add(5, 12));
