import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: Setup the the Redux Store here
import { createStore, applyMiddleware } from 'redux';

// Step 6: Let's use provider from react-redux to provide the store data
import { Provider } from 'react-redux'; 
//Definition: The Provider component uses something 
  //called as React Context which allows you to pass the 
  //store object to any components 
  //that needs to access it without the need to pass props.
  //Provider should be imported from react-redux 

// Step 14: Setup the middleware //npm i redux-logger redux-thunk
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

// Step 5: let’s import the combinedReducer 
// and pass it to the store as an argument.
import rootReducer from './reducers';

// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))); //this needs a special argument called 'reducer'

ReactDOM.render(
  <React.StrictMode>
    {/* this is how we have to provide store data to the app */ }
    <Provider store={store}>   
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
