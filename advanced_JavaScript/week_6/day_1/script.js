// console.log("sadgsf");
let x = "yes"

function get_x(){

    return x
}
console.log(get_x());

function get_email(name = "no_name_given") {

    return name+`@gmail.com`
}
let y = 10;

let c = (y<10) ? true : false;
console.log(c);

// function get_x(name){} == const get_x = (name) => {} // the same thing

const get_full_name = (name) => {
    return name
}

let arr = [2,4,5,23,6,3];

arr.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
