const taskReducer = (state = [], action) => {
  switch(action.type) {
    case 'POST':
      return [...state, action.payload]

    case 'DELETE':
      return state.filter(task => task !== action.task)

    case 'COMPLETE':
      // console.log('yay', state.find(id => id === action.task))
      // return [
      //   ...state,
      // ]
      console.log('from postTask state', state);
      console.log('from postTask action', action);
      return state;
      // break;

    default:
      return state
  }
}

export default taskReducer;