import React from "react"

class Event extends React.Component {
    constructor (props) {
        
        super(props);
        this.state = {
            isToggleOn : true

        }
        
    }
    
    render() {
        const event_handler = (message) =>{
            alert(message);
        }
        const handle_keyDown = (e) =>{
            if (e.key == "Enter"){
                alert(e.target.value)
            }
        }
        
        const toggleHandler = () => {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
          };
      return (
        <div>
           <button onClick={() => event_handler("I was clicked")}>Click Me!</button>
           <input onKeyDown={(e)=>handle_keyDown(e)}/>
           <button onClick={() => toggleHandler()}>
            {this.state.isToggleOn ? "ON" : "Off"}
           </button>
        </div>
      )
    }
  }

export default Event