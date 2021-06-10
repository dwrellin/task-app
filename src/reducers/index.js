import { combineReducers } from 'redux';
import taskReducer from './tasks';

const allReducers = combineReducers({
  postTask: taskReducer
})

export default allReducers;