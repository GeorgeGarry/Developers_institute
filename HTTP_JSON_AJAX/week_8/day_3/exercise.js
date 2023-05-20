function get_users(){
    let xhr = new XMLHttpRequest

    xhr.open('GET', `https://jsonplaceholder.typicode.com/users`);
    xhr.onload = () => {
     
        for (i of JSON.parse(xhr.response)){
            let new_img = document.createElement("img");
            new_img.src = `https://robohash.org/${i.id}`
            new_img.style.width = "100px"
            document.getElementById("root").appendChild(new_img);
            let name_p = document.createElement("p");
            name_p.innerText = i.name;
            document.getElementById("root").appendChild(name_p);
            let username_p = document.createElement("p");
            username_p.innerText = i.username;
            document.getElementById("root").appendChild(username_p);
            let email_p = document.createElement("p");
            email_p.innerText = i.email;
            document.getElementById("root").appendChild(email_p);
        }
    }
    xhr.send()
}

function get_users_2(){
    let xhr = new XMLHttpRequest

    xhr.open('GET', `https://jsonplaceholder.typicode.com/users`);
    xhr.onload = () => {
        let arr = xhr.response;
        const content = arr.map(i =>{
            return `<div style=display:inline-block;>
            <img src=https://robohash.org/${i.id}/>
            <h2> ${i.name} </h2>
            
            `
        
        });
        document.getElementById('root').innerHTML = content.join(``);
        
        }
    
    xhr.send()
}



