import React from "react";
class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }  
    render(){
        const change_color = () =>{
            this.setState({color:"blue"})
        }
        return(
            <div>
                <h2>My phone is a {this.state.brand}</h2>
                <h3>It is a {this.state.color} {this.state.model} from {this.state.year}</h3>
                <button onClick={()=>change_color()}>Change color to blue</button>
            </div>
        )
    }
} 
export default Phone