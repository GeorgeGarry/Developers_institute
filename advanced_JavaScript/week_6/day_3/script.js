function my_name(name){
    let x = 10
    return name
}
/*dffad*/

console.log("asdsa");

function my_func(name){
    console.log(name)
};
my_func("sara");
// self invoking function

((qwe) => {
    console.log(qwe);
})("Sara");


// nested functions or currying functions
function outer(x){
    function inner(y){
        return x*y
    }
    return inner
}

let a = outer(7);
console.log(a);
console.log(a(4));

const x = (a) => (b) => {
    return a*b
}
console.log(x(2)(3));

// compose
// const x_2 = (a,b) => (c) => a(b(c));
const x_2 = (a,b) => (c) => (d) => a(b(c(d)));


let sum_1 = (num) => num * 2;
let sum_2 = (num) => num + 1;
let sum_3 = (num) => num * 4;

// let a_1 = x(sum_1,sum_2)(6);
let a_1 = x_2(sum_1,sum_2)(sum_3);
console.log(a_1(2));


