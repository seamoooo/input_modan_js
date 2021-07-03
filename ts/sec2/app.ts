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
const person: {
  name: string,
  age: number,
  hobbies: string[],
  // tuble型要素の長さと、方を決める
  role: [number, string]
} = {
  age: 30,
  name: 'test',
  hobbies: ['sports', 'cooking'],
  role: [2, 'author']
}

//  tupleはpushを許可してしまうが、変数の再代入は検知できる
// person.role.push('admin');
// person.role = [0, 'adomin', 'user'];

let favoriteActivity: string[];
favoriteActivity = ['hoge']

console.log(person.name)

for (const hobby of person.hobbies) {
  // 配列がstringで定義されているので、stringオブジェクトに定義されている
  // メソッドは以外は使用できない map()はArray
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}