// 1. create a module users.js
// 2. create a function that get the json user file
// https://jsonplaceholder.typicode.com/users
// 3. return the arr of users from the function
// 4. console log the arr of user in
// the file that you require it (not in the module)

async function fetch_users(){
    // let req = await fetch("https://jsonplaceholder.typicode.com/users");
    // let data = await req.json();
    // let user_names = data.map(item =>{
    //     return item.name
    // })
    // return user_names;

    try{
        const resp = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const data = await resp.json();
        return data
    }   
    catch(e){
        console.log(e);
    }
}

module.exports = {
    fetch_users
}