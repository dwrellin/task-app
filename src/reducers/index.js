import { combineReducers } from 'redux';
import taskReducer from './postTask';

const allReducers = combineReducers({
  postTask: taskReducer
})

export default allReducers;