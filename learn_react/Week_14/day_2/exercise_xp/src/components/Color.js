import React from "react"

class Child extends React.Component{
    componentWillUnmount(){
        alert("This component is about to be unmounted")
    }
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}



class Color extends React.Component{
    constructor(){
        super();
        this.state={
            favoriteColor:"red",
            show:true
        }
    }
    shouldComponentUpdate(favoriteColor){
        return true
    }
    componentDidUpdate(favoriteColor){
        console.log("after update");
    }
    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor:"yellow"})
          }, 5000);
    }
    
    render(){
        const turn_blue = () =>{
            this.setState({favoriteColor:"blue"})
        }
        const delete_component = () =>{
            this.setState({show:false})
        }
        return(
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={() => turn_blue()}>Make it blue</button>
                {this.state.show ? <Child/> : null}
                <button onClick={() => delete_component()}>Delete</button>


            </div>
        )
    }
}
export default Color