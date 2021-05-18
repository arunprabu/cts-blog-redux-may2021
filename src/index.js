import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: Setup the the Redux Store here
import { createStore } from 'redux';

// Step 5: let’s import the combinedReducer 
// and pass it to the store as an argument.
import rootReducer from './reducers';

// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducer); //this needs a special argument called 'reducer'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
