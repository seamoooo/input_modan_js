import _ from 'lodash';
import { READ_EVENTS } from '../actions';

// アプリケーションの状態の変更を担う
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // オブジェクトのキーを変更するオブジェクトを返す
      // https://qiita.com/waterada/items/22ef4c618050ea766137
      return _.mapKeys(action.res.data, 'id');
    default:
      return state;
  }
};
