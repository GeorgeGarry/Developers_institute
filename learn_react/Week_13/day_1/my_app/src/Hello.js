import "./Hello.css"

const users = [
    {name:'Marie', email:'mary@gmail.com'},
    {name:'John', email:'John@gmail.com'},
    {name:'Bob', email:'Bob@gmail.com'}
]
// const users_html = users.map(item =>{
//     return (
//         <div>
//         <h2>{item.name}</h2>
//         <p className="text_email">{item.email}</p>
//         </div>
//     )
// })

const styling = {backgroundColor:"red", fontSize:"22px", color:"yellow"}

const Hello = () => {
    return (
        <div>
            <h1 style={styling} > Hello Users:</h1>
                    
            {/* {users_html} */}
            {/* {   
                users.map(item =>{
                    return (
                        <div>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        </div>
                    )
                })
            } */}
            <h1>Hello component</h1>
            
        </div>

    )
}

export default Hello
