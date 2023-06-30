

const Parent_component =(props)=>{
    
    console.log(props);

    if (props.user == "admin"){
        return(
            <>
            <h1>Parent</h1>
            </>
            )
    
    }
    return props.children
    // (
    //     <>
    //     <h1>Parent</h1>
    //     </>
    // )
}

export default Parent_component