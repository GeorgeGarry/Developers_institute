import logo from './logo.svg';
import './App.css';
import Counter  from './components/Counter';
import React from "react"
import User from "./components/User"
import users_json from "./users.json"
import "tachyons"
import { useState, useEffect } from "react"; //hook


   /* 
// 1) Convert this component to a class component.
// 2) Add a title state.
// 3) Send this title to counter via props.
// 4) Set the title of counter as the props title
// 5) ad a button, onClick => change the title to smth else   
  */

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state ={
//         title:"Banana",
//         show: true
//     }
// }
// change_title =()=>{
//   this.setState({title: "Orange", show:false})
// }
// render(){
//   return(
//       <>
//       {
//        this.state.show ? <Counter title={this.state.title}/> : null
//       }
//       <button onClick={this.change_title}> turn banana to orange</button>
//       </>
//   )
// }
// }



function App(props){
  // Add a state of users - useState
  // Add a button - onClick - fetch the users api
  // https://jsonplaceholder.typicode.com/users
  // Render the page with the users from the api
  const [users_json, setUsers] = useState([]);
  const [val, set_val] = useState();


  

   useEffect(()=>{
    get_users()
  },[])

 function get_users(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    setUsers(data);
  })
 }

 useEffect(()=>{
  if(val){
    console.log(val);
  }

},[val])

  return(
    <div>
      <h1>Users</h1>
      <input onChange={ (e) => set_val(e.target.val)} /> 
      {/* <button onClick={get_users}> get users</button> */}
      
        {   users_json.map( (item,index) => {
                return(
                  <User key={index} info={item}/>
              
                )
              })
        }
     </div>
  )
}

// function App(props) {
//   console.log(props);
//   const {data_obj} = props
//   const {a,b,c} = props.data_obj
//   return (
//     <div className="App">
//       <header className="App-header">
//         {data_obj.a}{data_obj.b}{data_obj.c}
//         <br/>
//         {a}{b}{c}
//         <br/>
//         <div>
//           {/* 
//           1) Convert this component to a class component.
//           2) Add a title state.
//           3) Send this title to counter via props.
//           4) Set the title of counter as the props title
//           5) ad a button, onClick => change the title to smth else
//           */}

//         </div>
//         <Counter/>
//       </header>
//     </div>
//   );
// }

export default App;
