import { COMPLETE, DELETE, POST } from '../constants/actionTypes';

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case POST:
      return [...state, action.payload]

    case DELETE:
      return state.filter(task => task !== action.task)

    case COMPLETE:
      return state.map(task => task.taskId === action.task.taskId ? action.task : task);

    default:
      return state
  }
}

export default taskReducer;