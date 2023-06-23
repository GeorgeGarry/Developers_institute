import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = `John`;
const arr = [
  {name:"John", email:`aa@gmail.com`},
  {name:"J1232ohn", email:`2222@gmail.com`},
  {name:"Josssshn", email:`33333@gmail.com`}
]
const element = (
  //react fragment (can use instedad of <div> container)
  
  // <React.Fragment></React.Fragment> - 
  // the same. just older way to do react fragments
  
  <>  
  {/* <div> */}
    <h1>Hi JSX {5+5}</h1>
    <h2>Bye</h2>
    {
      arr.map(i => {
        return(
          <div>
          {i.name} {i.email}
          </div>
        )
      })
    }
    {name}
  {/* </div> */}
 </>
)


// root.render(element)
  

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
