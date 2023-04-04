// JS FUNCTIONS

// buble sort
        // const numbers = [5,0,9,1,7,4,2,6,3,81];
        // console.log(numbers);
        // for (let i=0; i < numbers.lengt; i++){
        //     for(let j = 0;j<numbers.length;j++){
        //         if(numbers[i] < numbers[j]){
        //             let temp = numbers[i];
        //             numbers[i] = numbers[j];
        //             numbers[j]=temp;
        //         }
        //     }
        // }
// console.log(numbers);
// bubble sort
const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  for(let j = 0; j < numbers.length; j++){
    if(numbers[i] < numbers[j]){
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers);

// functions
    // let x = 2;
    // let y = 4;
    // console.log(x + y);
function my_func(x,y) {
    console.log(x + y);
    
}

// Exercise Hello World function
function log_hello_world (){
    // console.log("Hello World");
    return "Hello world"

}
console.log(log_hello_world()); 
function log_hello_world_2 (my_str){
    // console.log(my_str);
    return my_str

}
console.log(log_hello_world_2("Hello World"));
// log_hello_world_2("Hello World")

// Exercise function square of a number
// let num = prompt("give a number")
function findSquare(num){
    return num*num
}
// console.log(findSquare(prompt("give a number")));

// Exercise function convert celcius to faranheit 
// (celsius x 9/5）+32= Fahrenheit

// function cels_to_fahren (cels){
//     return (cels * 9 / 5) + 32
// }
// console.log(celc_to_fahren(0));

// Exercise function count vowels in a string

function count_vowels(my_str=""){
    my_str = my_str.toLowerCase()
    let counter = 0;
    for (let i=0; i<my_str.length; i++)
        if (my_str[i] === "a" || my_str[i] === "e" ||
        my_str[i] === "i" || my_str[i] === "o" ||
        my_str[i] === "u"){
                        counter ++
                    }

return counter
}
// let vowels_lowercase = ["a","e", "i", "o","u"];
console.log(count_vowels("rAAeero"));


// Exercise my_age
function log_ages(my_age){
    let mom_age = my_age*2;
    let dad_age = mom_age*1.2;
    // return [mom_age, dad_age]
    return {
        mum: mom_age,
        dad: dad_age
    }
}

// console.log(` My mom is ${log_ages(25)[0]} years old. My dad is ${log_ages(25)[1]} years old`); 
console.log(` My mom is ${log_ages(25).mum} years old. My dad is ${log_ages(25).dad} years old`); 

function checkPalindrome(my_str){
    // my_str = my_str.toLowerCase;
    if (my_str.length%2 != 0){}
    let center_index = (my_str.length - my_str.length%2)/2;
    // console.log(center_index);
    let my_str_1 = my_str.slice(0,center_index);
    let my_str_2 = my_str.slice(center_index+1, my_str.length);
    // console.log(my_str_1, my_str_2);
    my_str_2 = 



}
checkPalindrome("madam");
