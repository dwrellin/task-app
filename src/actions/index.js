import { COMPLETE, DELETE, POST } from '../constants/actionTypes';

export const postTask = data => {
  return {
    type: POST,
    payload: data
  }
}

export const removeTask = data => {
  return {
    type: DELETE,
    task: data
  }
}

export const completeTask = (id, data, toggleState) => {
  return {
    type: COMPLETE,
    task: {
      ...data,
      taskId: id,
      isCompleted: toggleState
    }
  }
}