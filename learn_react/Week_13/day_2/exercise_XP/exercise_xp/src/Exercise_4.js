import "./Exercise4.css" 
function Exercise_4(){
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(
        <div>
            {/* <h1 style={{color:"red", backgroundColor:"lightblue"}}>My h1 tag</h1> */}
            <h1 style={style_header}>My h1 tag</h1>

            <p className="para">my paragraph</p>
            <a href="https://www.google.com">Google</a>
            <form> 
                <label>My form: </label>
                <input type="text"></input>
                <input type="Submit" value={"Submit"}></input>
            </form>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqs55CRpuvjyEmlA8-kMsyc1kD_iXnIsjTVA&usqp=CAU"}/>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}

export default Exercise_4