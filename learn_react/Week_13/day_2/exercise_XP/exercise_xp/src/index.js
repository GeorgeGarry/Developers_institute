import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;
// root.render(
//   <div>
//     <h1>Hello World</h1>
//     {myelement}
//     <h2>{`React is ${sum} times better with JSX`}</h2>
//   </div>
// );


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
