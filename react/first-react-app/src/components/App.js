import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    // storeからpropsで値を参照する
    const props = this.props;

    return (
      <React.Fragment>
        <div>value {props.value}</div>

        <button onClick={props.increment}> +1 </button>
        <button onClick={props.decrement}> -1 </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.count.value,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //  1.ユーザーの入力から、actionが作成される
  //  2.コールバック関数として、dispathメソッドがreducerに渡す
  //  3.Reducerがstateを作成して、storeに保存

  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
