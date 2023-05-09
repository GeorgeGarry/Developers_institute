/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/
let my_arr = [1,5,6,7,4]
function arr_by_2(arr){
    let new_arr = []
    arr.forEach(item => {
        new_arr.push(item*2)
    });
    return new_arr
}
let new_arr =  arr_by_2(my_arr);
console.log(my_arr);
console.log(new_arr);

let arr_mapped = my_arr.map(item => {
    return item
});
my_arr = [1,5,2000,7,4];
console.log(my_arr);
console.log(arr_mapped);

// Object.keys => returns an array of keys
// Object.values => returns an array of values
// Object.entries => returns an array of keys and values
let obj = {
    a:1,
    b:2
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//                          .map exercise

let users = ["eli", "adam", "galina", "ziv"];

let users_mail = users.map(item =>{
    return item + "@gmail.com"
});
console.log(users_mail);

// console.log(["eli", "adam", "galina", "ziv"].map(item => {return item*2}));   //logs [NaN, NaN, NaN, NaN]

let arr_of_arr = my_arr.map(item =>{
    return [item]
})

console.log(arr_of_arr);

let arr_3 = arr_of_arr.map(x =>{
    return x[0]
})
console.log(arr_3);

arr_flatMap = arr_of_arr.flatMap(x=>{
    return x
})
console.log(arr_flatMap);



function greater_then_3 (arr){
    new_arr = []
    arr.forEach(x => {
        if (x>3){
            new_arr.push(x);
        };
    });
    return new_arr
}
console.log(greater_then_3([1,3,5,2,3,21,8]));

//                          .filter()

let exercise_arr = [1,3,5,2,3,21,8];
let filtered_arr = exercise_arr.filter(x =>{
    return x>3
})

console.log(filtered_arr);


let names = ["Tim" , "Johnathan", "Sandy", "Sarah"];

let _Sa_names = names.filter(item => item.startsWith("Sa"))
console.log(_Sa_names);


//                           EXERCISE

// console.log(exercise_arr.sum());
function arr_sum(arr) {
    let summ = 0;
    arr.forEach(x => summ+=x )
    return summ  
}

//                              .reduce()
console.log(arr_sum([2,5,10,100]));
let method_reduce = exercise_arr.reduce(( total, item) => {
    console.log(total);
    return total + item
})

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digits_summ(num) {
    let arr = new String(num).split("");
    console.log(arr);
    let new_number = arr.reduce((total,item) => {
        // console.log(total);
        return total + Number(item)
    }, 0)
    console.log(new_number);
    if (new_number < 10) {
        return new_number}
    // return digits_summ(new_number)
}
console.log("**************");
console.log(digits_summ(33));
// digits_summ(333)

console.log("**************");

// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,8,4,8,1,8]
// birthdayCakeCandles function will return
// how many candles you can blow

    function birthday_cake(arr) {
        // let max = arr[0]
        // for (i in arr){
        //     if (max < arr[i]){
        //         max = arr[i]
        //     }
        // }
        let max = Math.max(...arr);
        return arr.filter( x=> x == max).length
    }
    console.log(birthday_cake([2,44,8,44,8,44,44]));

/*
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

function compare_arr(arr) {
    let arr_1 = arr[0].split(",");
    let arr_2 = arr[1].split(",");
    let res = arr_1.filter(item => {
        return arr_2.includes(item)
    })
    return res
}
console.log(compare_arr(["1,2,5,6,7", "2,5,7,8,15"]));


//                                          Destructuring 

let arr_des = [1,2];
// const a = arr_des[0];
// const b = arr_des[1];

const [a,b] =  [3,4];
console.log(a,b);
let clone_arr = [...arr_des];
let clone_plus_arr = [a,b, ...arr_des]   //spread operator
// let clone_plus_arr = [...arr_des, a, b]   //spread operator

console.log(clone_plus_arr);
console.log(clone_arr);

// rest operator

let [c,d, ...e] = [1,2,3,4,5,6]       // rest operator
console.log(c);
console.log(d);
console.log(e);