// alert("I am an alert");


async function display_products() {
    try{
    const response = await fetch("http://localhost:3030/api/products");
    const data = await response.json();
    for (i of data){
        let div = document.getElementById(`products`);
        let p = document.createElement(`p`);
        p.innerText = `${i.name} : ${i.price}`
        div.appendChild(p);
    }
    
    }
    catch(err){
        alert(err);
    };
    
    

  }
display_products()
