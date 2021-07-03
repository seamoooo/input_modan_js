// オブジェクト型について
// Array型 柔軟にも厳格にも指定することができる
// 型推論を効かせて変数定義に変更する必要がある
// const person: {
//   age: number,
//   name: string,
// } = {
//   age: 30,
//   name: 'test'
// }
// 型推論が効いている
var person = {
    age: 30,
    name: 'test',
    hobbies: ['sports', 'cooking']
};
var favoriteActivity;
favoriteActivity = ['hoge'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
