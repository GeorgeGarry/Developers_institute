
import {useState} from "react";


const Child_component =(props)=>{
    // const [text, setText] = useState(`text`);
    return (
        <>
            <h1>Child</h1>
            <input onChange={(e) => 
            props.send_function_from_appJS_to_child_component(e.target.value)}></input>
                    
        </>
    )

}

export default Child_component