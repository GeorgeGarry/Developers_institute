import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import User from "./components/User"
import users_json from "./users.json"
import "tachyons"

function App() {
  const users = [
    {name:'Marie', email:'mary@gmail.com'},
    {name:'John', email:'John@gmail.com'},
    {name:'Bob', email:'Bob@gmail.com'}
]
  return (
    <div className="App">
      {users_json.map( (item,index) => {
        return(
          <User key={index} info={item}
          // name={item.name} email={item.email} username={item.username} 
          />

        )
      })}
      {/* <User name = "aaa" email = "aaa@gmail.com"/>
      <User name = "bbb" email = "bbb@gmail.com"/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React</h1>
        <Hello />
        
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
