import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import postTaskReducer from './postTask';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  postTask: postTaskReducer
})

export default allReducers;