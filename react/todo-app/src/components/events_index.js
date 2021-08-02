import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventsIndex extends Component {

  // mount時に呼び出し
  componentDidMount(){
    // apiの呼び出しはactionに集める
    this.props.readEvents()
  }


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

const mapStateToProps = (state) => {};

// 短縮形
const mapDispatchToProps = ({ readEvents })
//  1.ユーザーの入力から、actionが作成される
//  2.コールバック関数として、dispathメソッドがreducerに渡す
//  3.Reducerがstateを作成して、storeに保存

// const mapDispatchToProps = (dispatch) => ({
//   readEvents: () => dispatch(readEvents()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
