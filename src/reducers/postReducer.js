// Step 3:  Setup Reducer for the store

/*
What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.
*/

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store.
// reducer should mandatorily return a state. 
const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state;
    default:
      return state;
  }
}
export default postReducer;