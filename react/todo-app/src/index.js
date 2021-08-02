import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// ミドルウェアなので、適応する関数をreduxからimportする必要がある
import thunk from 'redux-thunk'

import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';
import './index.css';

// 第2引数でthunkを読み込む
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
