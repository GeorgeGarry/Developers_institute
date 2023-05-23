// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) =>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     render(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// const root = document.getElementById("root");
// function render(arr){
//     const html = arr.map(item => {
//         return `<div style="display:inline-block;">
//         <img src="https://robohash.org/${item.id}?size=150x150"/>
//         <h2>${item.name}</h2>
//         <p>${item.email}</p>
//         <p>${item.username}</p>
//         </div>`
//     })
//     root.innerHTML = html.join("")
    
// }

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

  let arr_url = urls.map(url =>{
        return fetch(url).then(res => res.json())
    })

async function render_data(arr){
    let res = await Promise.all(arr_url);
        console.log(res);
}

// render_data(arr_url);


//                          ZIV's solution
const get_data = async() =>{
    const [user,post,albums] = await Promise.all(urls.map ( async (item) => {
        const resp = await fetch(item)
        return resp.json()
        // return fetch(item).then(res =>  res.json())
    }))
    console.log(user,post,albums);
}
get_data();



