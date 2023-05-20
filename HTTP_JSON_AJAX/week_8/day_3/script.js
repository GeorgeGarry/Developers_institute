//Asynchronous
// import CORSE

// function first() {
//     console.log("first");
// }
// function second() {
//     // first();
//     console.log("second");
// }

// setTimeout(()=> {
//     first();
// }, 1)
// first();
// second();

// // XMLHttpRequest
// let req_1 = new XMLHttpRequest;

// // open(method, url, [async,user,password]);

// req_1.open("GET", "https://jsonplaceholder.typicode.com/users");
// req_1.send();

// //onload method
// req_1.onload = function () {
//     console.log(req_1.response);
//     // console.log(JSON.parse(req_1.response));
// }
// req_1.onerror = function(){
//     console.log("something is wrong");
// }
// req_1.onprogress = function(event) {
//     console.log(event.loaded, event.total, event.lengthComputable);
// }



function get_random_joke(e) {
    e.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open('GET', `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${e.target.cat.value}`);

    xhr.setRequestHeader('accept', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '27ffa4af19mshebbc84d4c789642p1dbda0jsnfd8637064c9c');
    xhr.setRequestHeader('X-RapidAPI-Host', 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com');
    
    //timeout
    xhr.timeout = 10000;  //will not get the responvce after 10s


    //responseType
            //text
            //JSON
            //document
            //arraybuffer
            //blob
    xhr.responseType = `text`


    //abort
    xhr.abort();

    xhr.send();

    xhr.onload = () => {
        console.log(xhr.response);
    };
}


// let xhr_1 = new XMLHttpRequest
// xhr_1.open('GET', `https://zivuch.github.io/emails.xml`);
// xhr_1.onload = () => {
//     console.log(xhr_1.response);
// }
// xhr_1.send()


let article = {
    title:"banana",
    id:1,
    email:"email@gmail.com"
}

let xhr_1 = new XMLHttpRequest
xhr_1.open('POST', `https://jsonplaceholder.typicode.com/users`);
xhr_1.onload = () => {
    console.log(xhr_1.response);
}
xhr_1.responseType = "JSON";
xhr_1.setRequestHeader("Content-")
xhr_1.send(JSON.stringify(article))








//              https://zivuch.github.io/emails.xml



