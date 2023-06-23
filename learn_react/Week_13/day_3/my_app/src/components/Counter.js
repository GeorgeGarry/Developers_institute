import React from "react";
import { useState } from "react"; //hook
import { useEffect } from "react"; //hook

// ⬇️ function compounent ⬇️
const Counter = (props) =>{
    const [count,set_count] = useState(0)
    const [count_a,set_count_a] = useState(0)
    function add(){
        set_count(count+1)
    }
   useEffect(()=>{
    console.log(`useEffect`,count);
   }, [count])
    return (
        // <></> - react fragment
        <>  
        <button onClick={add}>+</button>
        <h1>{count}</h1>
        <h1>{count_a}</h1>
        <button onClick={() =>{set_count(count-1)}}>-</button>
        <button onClick={() =>{set_count_a(count_a-1)}}>-</button>
        <h2>Counter</h2>
        </>
    )

}


//  ⬇️ class compounent ⬇️
// class Counter extends React.Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             count:0
//         }
//         // console.log(1);
//     }
//     // componentDidMount = () =>{
//     //     console.log(3);
//     // }
    

//     componentWillUnmount = () =>{
//         alert("Don't do that")
//     }
//     add =()=>{
//         // this.state.count ++  // NEVER DO LIKE THIS
//         // console.log(this.state.c ount);
//         let a = this.state.count+1
//         this.setState({count: a })

//     }

//     substract =()=>{
//         this.setState({count: this.state.count-1})
//     }

   

//     render(){
//         console.log(2);
//         return(
//             <>
//             <h2>{this.props.title}</h2>
//             <h2>{this.state.count}</h2>
            
//             <button onClick={this.add}> + </button>
//             <button onClick={this.substract}> - </button>
//             </>
//         )
//     }
// }


export default Counter