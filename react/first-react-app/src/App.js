import React, { Component } from 'react';

// クラスコンポーネント
// class App extends Component {
//   render() {
//     const greeting = 'HI';
//     // キャメルで記述する。
//     const dom = <h1 className="foo">helloworld{greeting}</h1>;
//     // JSXML 内部的にbabelがJSトランスパイルする
//     return (
//       // タグを一つにまとめる必要がある
//       // 認識されたくない場合は、<React.Fragment>使用する
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log('I am checked');
//           }}
//         ></input>
//       </React.Fragment>
//     );
//   }
// }

// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: 'tame', age: 10 },
    { name: 'bin', age: 10 },
    { name: 'ぶち' },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        // 要素を生成してしまうと 要素の監視が重複するのでwarningがでるので、要素にindexを与えて区別させる
        return <Cat name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const Cat = (props) => {
  return (
    <div>
      {props.name} が しゃーーー {props.age}
    </div>
  );
};

// propsのデフォルト値を設定することができる
Cat.defaultProps = {
  age: 2,
};

export default App;
