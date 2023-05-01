// const div = document.getElementById("outer");
// console.log(div);
// const p = document.getElementById("text");
// console.log(p);

const divs = document.getElementsByTagName("div");
console.log(divs);

for (let index = 0; index < divs.length; index++) {
    console.log(divs[index]) ;
    
}
const header = document.getElementsByTagName("h1");
console.log(header);

const body = document.body;
console.log(body);
console.log(body.firstElementChild);
console.log(body.firstElementChild.firstElementChild);
console.log(body.lastElementChild);

const elem = document.getElementById("text");
console.log(elem.innerText);
console.log(elem.innerHTML);
console.log(elem.textContent);
console.log(elem.nodeValue);
elem.innerText = "<b>dom is working great</b>"
//  elem.innerHTML = "<b>dom is working great</b>"

const elem_2 = document.getElementById("inner");
const h2 = document.createElement("h2");
h2.textContent = "new H2 header";
elem_2.appendChild(h2);
elem_2.insertBefore(h2);