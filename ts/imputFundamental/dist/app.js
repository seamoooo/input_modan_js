function ad(n1, n2) {
    return n1 + n2;
}
function printNumber(number) {
    console.log('result' + number);
}
let combinValue;
combinValue = ad;
function adAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
adAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
console.log(combinValue(8, 8));
printNumber(ad(5, 12));
let test;
let hoge;
test = "hoge";
hoge = "hoge";
