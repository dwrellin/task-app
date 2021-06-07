const postTaskReducer = (state = [], action) => {
  switch(action.type) {
    case 'POST':
      return [...state, action.payload]

    default:
      return state
  }
}

export default postTaskReducer;