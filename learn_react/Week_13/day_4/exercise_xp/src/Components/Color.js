import React from "react"
class Color extends React.Component{
    constructor(){
        super();
        this.state={
            favoriteColor:"red"
        }
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
      
        return(
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={() => turn_blue()}>Make it blue</button>
            </div>
        )
    }
}
export default Color