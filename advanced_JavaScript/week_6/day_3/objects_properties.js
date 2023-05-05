let obj = {};
let obj_1 = {
    name: "Sarah",
    email: "Sarah@gmail.com"
}
let obj_2 = new Object();

console.log(obj, obj_1, obj_2);

obj.name = "john";
obj.email = "john@gmail.com";
console.log(obj, obj_2);
console.log(obj_1);
obj_2["name"] = "Mary";
obj_2["email"] = "Mary@gmail.com"

console.log(obj, obj_1, obj_2);
console.log(obj["name"]);
console.log(obj_2.email);
// console.log((obj_1.username));

let state = {
    first_name: "",
    last_name: "",
    email: ""
}
function handle_input(e){
    state[e.target.name] = e.target.value
    // console.log(e.target.value);
}

function handle_submit(){
    console.log(state);
}

let name = "john";
let email = "john@gmail.com"
let obj_3 = {
    name,
    email
}
console.log(obj_3);

for (x in obj_3){
    console.log(x, obj_3[x]);
}

let my_car = {};
my_car.brand = "ford";
my_car.model =  "mustang";
my_car.year = "1969";

function my_func(obj) {
    let mystr = "my car";
    for( i in obj){
        mystr += ` ${i} is ${obj[i]} `;
    }
    console.log(mystr);
}
my_func(my_car);

let my_bascket = {
    glasses: 1,
    books: 2,
    floss: 200
}

function check_bascket(obj, search) {
   console.log(obj.search);
    
}

console.log(check_bascket(my_bascket, "books"));

// by value or by reference
let a = 5;
let b = a; // by value
b ++
console.log(a, b);
let arr = [1,2,3];
let myclone = [...arr];  //cloning arrays
let arr_2 = arr;
arr_2[1] = 5; // by reference
arr[0] = 15;
console.log(arr, arr_2);

let my_obj = {
    name: "aaa",
    email: "bbb"
}
let my_obj_2 = my_obj
let clone_obj = {...my_obj} // cloning objects


my_obj_2.email = "ccc"
console.log(my_obj);
console.log(my_obj_2);


// cloning objects
console.log(clone_obj);
