const body = {}
const form = document.querySelector("form");
form.addEventListener("submit", handle_submit)
function handle_submit(event){
    event.preventDefault();
    const form_data = new FormData(form);
    for (entry of form_data){
       const [key,value] = entry;
       body[key] = value;
    }
    console.log(body);
    send_body();
    console.log(body);
}

function send_body(){
    console.log()
    fetch("http://localhost:3000/search/title",{
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        },
        method: "POST"
    })
    .then((res) => res.text())
    .then((html) =>{ console.log(html)
            document.getElementsByName("body")[0].innerHTML = html;})
    .catch((err) =>  {console.log(err)})
};
