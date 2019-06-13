import {createStore} from 'redux';
import {commentsReducer, repliesReducer} from './reducers';

const reducer = (state = {}, action) => {
  return {
    comments: commentsReducer(state.comments, action),
    replies: repliesReducer(state.replies, action)
  }
}

const store = createStore(reducer);

export default store;
