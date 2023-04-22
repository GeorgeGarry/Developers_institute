// function my_on_click (e){
//     console.log("banana");
//     console.log(e.type, e.target, e.target);
// }

// function getValue (e){
//     console.log(e.target.value);

// }
// function get_div_text(evt){
//     console.log(evt.target.innerText);
// }
let arr = [
    {id:1, user:'John',email:'john@gmail.com'},
    {id:2, user:'Sara', email:'sara@gmail.com'},
    {id:3, user:'Yasaar', email:'yasaar@gmail.com'},
    {id:10, user:'Yeshna', email:'yeshna@gmail.com'},
    {id:5, user:'Varshana', email:'varshana@gmail.com'}
  ];
const root = document.getElementById('root')
function createUsers(){
root.innerHTML ="";
for(let i = 0; i < arr.length; i++){
    let div = document.createElement('div');
    div.classList.add('inner-div');
    let img = document.createElement('img');
    img.setAttribute('src', `https://robohash.org/${arr[i].id}`)
    img.style.width = '120px';
    div.appendChild(img);
    let name = document.createElement('h2');
    name.innerText = arr[i].user;
    div.appendChild(name)
    let email = document.createElement('p');
    email.textContent = arr[i].email;
    div.appendChild(email)
    root.appendChild(div)
    }
}

