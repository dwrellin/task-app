import { combineReducers } from 'redux';
import postTaskReducer from './postTask';

const allReducers = combineReducers({
  postTask: postTaskReducer
})

export default allReducers;