// Exercise 1
// Create a function to check the year given by the user

// If the year is after 2000, you should display 
// "You are in the 21st century", else you should display "You live in the Middle Age"

        // let user_input

        // function get_input() {
        //     while(isNaN(user_input)){
        //         user_input = prompt("what year is it?")
        //     }
        //     let joke = (user_input > 2000) ? "You are in the 21st century" : "You live in the Middle Age"
        //     alert(joke)
        // }

        // get_input()

// Exercise 1                       END

// Exercise 2
// Using arrow function and ternary operator create a calculator that 
// returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

let a = 2;
let b = 5;

let operator = "/";

const my_calc = (input)  => {
    let res = (input == "+") ? a+b :
              (input == "-") ? a-b :
              (input == "*") ? a*b :
              (input == "/") ? a/b : "wrong operator";
    return res;
};

console.log(my_calc(operator));

// Exercise 2                   END

// Exercise 3
// Using the for each method, display only the even numbers in the array

const numbers = [5,11,3,15,17];

numbers.forEach((item) =>{
    if (item%2 == 0){console.log(item);}
})
// Exercise 3                       END


function any_even(arr) {
    let res = false
    arr.forEach((item) =>{
        if (item%2 == 0){res = true}
    })
    return res
  }

console.log(any_even(numbers));
let some_method = numbers.some(item => {
    return item % 2 === 0
})
console.log(some_method);

function all_even(arr){
    arr.forEach((item) =>{
        if (item%2 !== 0){
            return false
        }
        
    })
    return true
}

console.log(all_even(numbers));

console.log(numbers.some(item => item % 2 === 0));
console.log(numbers.every(item => item %2 == 0));


function find_item(arr, my_search) {
    for (i in arr){
        if (arr[i] === my_search)
        return true
    }
    return false
    
}
console.log(find_item(numbers, 11));

console.log(numbers.includes(5));

let my_str = "sdfdfdfds"
console.log(my_str.includes("a"));


my_card = "344874308915761"

function hide_numbers(card){
    let last_4_digits = card.slice(-4);
    return last_4_digits.padStart(card.length, "*")
}

// console.log(my_card.padStart("*"));
// my_card.padStart(4)

let str = "*5"
// let ret_2 = str.padStart(16, "*")
// console.log(ret_2);
console.log(my_card.padStart(16, "*", ));

console.log(hide_numbers(my_card));

str = "    Hello     ";
console.log(str);
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.trim());