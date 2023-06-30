import logo from './logo.svg';
import './App.css';
import {useState} from "react";
// import Child from './components/Child_component';
import Parent from './components/Parent_component';
import Counter from './components/Counter';
import Error_Boundary from './Error_Boundary';

function App(props) {
  const [text, setText] = useState(`text`);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputsValues, setInputsValues] = useState({
    email:'',
    password:'',
    checkbox:null,
    color:null

  });

  // handle multiple inputs with one function
  const handle_change = (e) =>{

    const value = (e.target.type === "checkbox")
                    ?e.target.checked
                    :e.target.value;

    setInputsValues({...inputsValues, [e.target.name]:value})
    
    // e.preventDefault();


  }

  const handle_submit = (e) =>{
    e.preventDefault();
    console.log(inputsValues);
    // fetch('api', {        //example
    //   method: 'POST',
    //   headers: {'Content-type':'application-json'},
    //   body:JSON.stringify({email,password})
    // })

  }
  return (
    <div className="App">
      <header className="App-header">
        
       {/* {text} */}
       {/* <input onChange={(e) => setText(e.target.value)}></input> */}
       {/* <Child_component send_function_from_appJS_to_child_component={setText}/> */}

       {/* user="admin" */}
      {/* <Parent  user="george">
        <Child />
      </Parent> */}
      {/* <Error_Boundary>
        <Counter />
      </Error_Boundary>
        <Counter /> */}

        <form onSubmit={handle_submit}>
          {/* <input type='email' onChange={(e)=> {setEmail(e.target.value)}}/>
          <input type='password' onChange={(e)=> {setPassword(e.target.value)}}/> */}
          <input type='email' name='email' onChange={(e)=> {handle_change(e)}}/>
          <input type='password' name='password' onChange={(e)=> {handle_change(e)}}/>
          <input type='checkbox' name='checkbox' onChange={(e)=> {handle_change(e)}}/>
          <select name='color' onChange={(e)=> {handle_change(e)}}>
            <option value={'red'}>Red</option>
            <option value={'green'}>Green</option>
            <option value={'blue'}>Blue</option>
          </select>
          <input type='submit' value={"Submit"}/>
        </form>


      </header>
    </div>
  );
}

export default App;
