import React from "react"
import Garage from "./Garage";

class Car extends React.Component {
    constructor (props) {
        
        super(props);
        this.state = {
            color:"blue"
        }
    }
    render() {
      return (
        <div>
            <h2>This car is a {this.state.color} {this.props.model} </h2>
            <Garage size="small"/>
        </div>
      )
    }
  }

export default Car