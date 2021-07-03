// オブジェクト型について
// Array型 柔軟にも厳格にも指定することができる
// Tuple型 要素の長さを指定できる
// 型推論を効かせて変数定義に変更する必要がある
// const person: {
//   age: number,
//   name: string,
// } = {
//   age: 30,
//   name: 'test'
// }
// 型推論が効いている
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   // tuble型要素の長さと、方を決める
//   role: [number, string]
//   // Enum 定数の集合の一覧に名前をつける
// } = {
//   age: 30,
//   name: 'test',
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// }
// enumで管理することができる
// const ADIMIN = 0;
// const READ_ONLY = 1;
// const AUTHORS = 2;
var Role;
(function (Role) {
    Role[Role["ADIMIN"] = 0] = "ADIMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHORS"] = 2] = "AUTHORS";
})(Role || (Role = {}));
;
var person = {
    age: 30,
    name: 'test',
    hobbies: ['sports', 'cooking'],
    role: Role.ADIMIN
};
//  tupleはpushを許可してしまうが、変数の再代入は検知できる
// person.role.push('admin');
// person.role = [0, 'adomin', 'user'];
// let favoriteActivity: string[];
// favoriteActivity = ['hoge']
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // 配列がstringで定義されているので、stringオブジェクトに定義されている
    // メソッドは以外は使用できない map()はArray
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.role === Role.ADIMIN) {
    console.log("管理者User");
}
