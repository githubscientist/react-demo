import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';

// add some data
// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   }
// ];

import { createStore } from 'redux';

// Reducer function
const counterReducer = (state = 0, action) => {
  // if (action.type === 'INCREMENT') {
  //   return state + 1;
  // } else if (action.type === 'DECREMENT') {
  //   return state - 1;
  // } else if (action.type === 'ZERO') {
  //   return 0;
  // }
  // return state;

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'ZERO':
      return 0;
    default:
      return state;
  }
}

// create a new store
const store = createStore(counterReducer);

function App() {

  return (
    <div>

      <div>
        {store.getState()}
      </div>

      <button onClick={e => store.dispatch({type: 'INCREMENT'})}>
        plus
      </button>

      <button onClick={e => store.dispatch({type: 'DECREMENT'})}>
        minus
      </button>

      <button onClick={e => store.dispatch({type: 'ZERO'})}>
        zero
      </button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(
  <App />
)
}

renderApp();

store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
