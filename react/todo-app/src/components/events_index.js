import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  // mount時に呼び出し
  componentDidMount() {
    // apiの呼び出しはactionに集める
    // mount時にactionにあるreadEventsを呼び出す
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

// reducerから値をpropsで受け取る
// イベントに関する状態を描画する
const mapStateToProps = (state) => ({
  events: state.events,
});

// 短縮形
const mapDispatchToProps = { readEvents };
// const mapDispatchToProps = (dispatch) => ({
//   readEvents: () => dispatch(readEvents()),
// });

// *************** reduxのデータの流れ ***********
//  0.connectでstateとdispath関数をEventsIndexにわたす
//  1.mount時に、actionが作成される
//  2.コールバック関数としてreadEventsを、dispathメソッドがreducerに渡す
//  3.Reducerがstateを作成して、storeに保存
//  4.mapStateToPropsでstoreから、propsで値を受け取る

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
