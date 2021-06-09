export const postTask = data => {
  return {
    type: 'POST',
    payload: data
  }
}

export const removeTask = data => {
  return {
    type: 'DELETE',
    task: data
  }
}