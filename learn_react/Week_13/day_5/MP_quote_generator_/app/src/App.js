import logo from './logo.svg';
import './App.css';
import quotes from "./QuotesDatabase";
import React, {Component} from "react";

console.log(quotes.length);

function App() {
  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const color = `rgb(${red}, ${green}, ${blue})`;
  
    return color;
  }
  
    const [message, setMessage] = React.useState('');
    const [backgroundColor, setBackgroundColor] = React.useState('');


    const handle_button_click = () => {
      let random_quote = Math.floor(Math.random() * 94);
      setMessage([`${quotes[random_quote].quote}`,`${quotes[random_quote].author}`]);
      setBackgroundColor(getRandomColor());
    };
  return (
      <div className="App " style={{ backgroundColor }} >
        <header className="App-header">
          <div id="root" style={{color: "rgb(43, 50, 101)"}} >
            <div>
              <div className="quotebox " style={{ backgroundColor: 'beige' }}>
                <div className="fadeIn " >
                  <h1 id="quote">{message[0]} </h1>
                  <h5 id="author">{message[1]}</h5>
                </div >
                <button   id="newquote" onClick={handle_button_click}
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib" 
                style={{ backgroundColor }}>New quote</button>
                  
              </div>
            </div>
          </div>

        </header>
        <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"></link>
      </div>
  );
}

export default App;


{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}



// <div id="root">
//   <div>
//     <div style="background-color: white;" class="quotebox">
//       <div class="fadeIn" style="color: rgb(43, 50, 101);">
//         <h1 id="quote">"Be the chief but never the lord."</h1>
//         <h5 id="author">-Lao Tzu-</h5>
//       </div>
//         <button style="background-color: rgb(43, 50, 101);" id="newquote">New quote</button>
//     </div>
//   </div>
// </div>