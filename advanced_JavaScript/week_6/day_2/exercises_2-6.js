// Exercise 2 : Ternary Operator
    // Transform the winBattle() function to an arrow function.
    // Create a variable called experiencePoints.
    // Assign to this variable, a ternary operator. 
    // If winBattle() is true, the experiencePoints variable should be equal to 10, 
    // else the variable should be equal to 1.
    // Console.log the experiencePoints variable.
function winBattle(){
    return true;
}
let win_battle_arrow = () => true
// let win_battle_arrow = () => false
let experiencePoints = (win_battle_arrow() == true) ? 10 : 1;
console.log(experiencePoints);
// Exercise 2 : Ternary Operator                END

// Exercise 3 : Is It A String ?
    // Write a JavaScript arrow function that checks whether the value of the argument passed,
    // is a string or not. Use ternary operator
    // Check out the example below to see the expected output

let is_string = (input) =>{
    let res = (typeof input == "string") ? true : false
    return res
};
console.log(is_string('hello')); 
//true
console.log(is_string([1, 2, 4, 0]));
//false
// Exercise 3 : Is It A String ?            END

// Exercise 4 : Colors
    // Write a JavaScript program that displays the colors in the following order : 
    // “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

    // Check if at least one element of the array is equal to the value “Violet”. 
    // If yes, console.log("Yeah"), else console.log("No...")
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const colors = ["Blue", "Green", "Red", "Orange", "Indigo", "Yellow"];


colors.forEach((item, index) =>{
    console.log(`#${index+1} choice is ${item}.`);
})
let is_violet = (colors.some(item => item == "Violet") == true) ? "Yeah" : "No..."
console.log(is_violet);
// Exercise 4 : Colors                  END

// Exercise 5 : Colors #2
    // Write a JavaScript program that displays the colors in the following order : 
    // “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((item, index) =>{
    let grammar = (index < 3) ? ordinal[index+1]:ordinal[0]
    console.log(`${index+1}${grammar} choice is ${item}.`);
})
// Exercise 5 : Colors #2                   END

// Exercise 6 : Bank Details
    // Create a global variable called bankAmount which value is the amount of money currently in your account.
    // Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    // Create an array with all your monthly expenses, both positive and negative (money made and money spent).
    // Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
    // Create a program that modifies the expenses (ie. the positive AND the negative expenses) 
    // so that they will include taxes (multiply each expense by the VAT).
    // Display your current bankAccount standing at the end of the month.
let my_balance = 5000;
let vat = 1.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];
details.forEach((item) =>{
    ammount = parseFloat(item.slice(1)*vat);
    operator = item.slice(0,1);
    console.log(operator);
    console.log(ammount);
    my_balance = (operator == "+") ? my_balance + ammount : my_balance - ammount;
})
console.log(my_balance);
// console.log(5000+200*vat-100*vat+146*vat+167*vat-2900*vat);
// Exercise 6 : Bank Details            END