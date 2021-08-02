import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS';

// actionクリエーター
// object リテラル式を返す場合は、本体を丸括弧 () で囲みます:
// params => ({foo: bar})

// redux-thunk = actionクリエーターがactionの代わりに、関数を返すことができる
// https://github.com/reduxjs/redux-thunk
// 内部の関数はdipatchとgetStateをパラメータとして受け取ることができる

// todoを返す練習用api
const ROOT = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERY = '?token=token123'

export const readEvents = () => async (dispatch) => {
    const res = await axios.get(`${ROOT}/events${QUERY}`)
    console.log(res)

    // dispatchでrdsucerに渡す
    dispatch({type: READ_EVENTS, res})
};
