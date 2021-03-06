// Step 3:  Setup Reducer for the store

import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

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

  // Step 8: Have proper switch case for every action
  switch(action.type) {
    case ADD_POST:
      // changing the state immutably
      // Refer: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
      let addPostState = [
        ...state,
        action.payload
      ];
      return addPostState;
    case GET_POSTS:
      return action.payload;
    case GET_POST_BY_ID:
      return action.payload;
    case EDIT_POST:
      return state;
    case DELETE_POST:
      return action.payload;
    default:
      return state;
  }
}
export default postReducer;