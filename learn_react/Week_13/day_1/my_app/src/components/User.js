

const User = (props) =>{
   const {name,email,username,id} = props.info
    return(
        <div className="tc bg-light-green br3 pa3 ma2 dib grow shadow-5">
            {/* <h2>Name: John</h2>
            <h4>Email: John@gmail.com</h4> */}
            <img src = {`https://robohash.org/${id}`}/>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <p>Username: {username}</p>
            
        </div>
    )
}

export default User