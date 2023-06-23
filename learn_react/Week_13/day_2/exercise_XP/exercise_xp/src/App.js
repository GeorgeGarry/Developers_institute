import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from "./User_favorite_colors.js"
import Exercise_4 from './Exercise_4';




function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
    };
  return (
    <div className="App">
      {/* <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      {user.favAnimals.map((item,index) =>{
        return <UserFavoriteColors key={index} info={item}/>
      })} */}
      
      {/* <h1>
    I do not use JSX
  </h1> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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



      {/* Exercise 4 */}
      <Exercise_4/>



    </div>
  );
}

export default App;
