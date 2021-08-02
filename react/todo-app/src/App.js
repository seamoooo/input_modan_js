import React, { Component } from 'react';
// propsの型ちぇっくを行う
// import PropTypes from 'prop-types';

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
// const App = () => {
//   const profiles = [
//     { name: 'tame', age: 10 },
//     { name: 'bin', age: 10 },
//     { name: 'ぶち' },
//   ];
//   return (
//     <div>
//       {profiles.map((profile, index) => {
//         // 要素を生成してしまうと 要素の監視が重複するのでwarningがでるので、要素にindexを与えて区別させる
//         return <Cat name={profile.name} age={profile.age} key={index} />;
//       })}
//     </div>
//   );
// };

// const Cat = (props) => {
//   return (
//     <div>
//       {props.name} が しゃーーー {props.age}
//     </div>
//   );
// };

// // propsのデフォルト値を設定することができる
// Cat.defaultProps = {
//   age: 2,
// };

// Cat.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };
// export default App;

// input state
const App = () => <Counter></Counter>;

// stateを使用したい場合はクラスコンポーネントでなければならない
// おそらく関数コンポーネントだと初期化処理ができないから
class Counter extends Component {
  constructor(props) {
    // 初期化
    super(props);
    // vueでいうdataよりのvuex風味
    this.state = { count: 0 };
    console.log(this.state);
  }

  addCount = () => {
    console.log(this.state.count);
    // stateを更新する必ずsetState
    this.setState({ count: this.state.count + 1 });
  };

  revertCount = () => {
    console.log(this.state.count);
    // stateを更新する必ずsetState
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.revertCount}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
