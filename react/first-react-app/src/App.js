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
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>しゃーーー</div>;
};

export default App;
