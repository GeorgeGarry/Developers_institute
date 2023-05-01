// Exercise 1
// Analyse the code below without running it, what will be the output ?
    var num = 8;
    var num = 10;
    console.log(num);  //10, because unlike let, var can overwrite the variable

// Exercise 2
// Change the code so the var i will be undefined outside of the for loop
    
    function numbers() {
        for (//var i = 0
            let i = 0; i < 5; i += 1) { //here I've changed var to let, so I can decrlare it again outside of the loop
        console.log(i);
        }
        var i; //declare i here so it will be undefined
        //i = undefined;  // another solution
        console.log(i);
    }
    numbers();

/*
Exercise 3

You have to decide which type of variables you have to use

Create a global variable that save the amount of money you have in your account
Create a variable that saves the amount of VAT
Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
Create a JS code that multiplies of the expenses by the VAT
Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
Display it
*/
let my_account = 10000;
let revenues = [];
let expences =[];
let vat = 1.17;

function get_revenue_expences(arr, category) {
    let input;
    while (true){
        input = prompt(`please input your ${category} 1 by 1. Enter STOP when you're finished`)
        if (input == "STOP"){
            break
        }
        else if (isNaN(input)){
            alert("please input a number!")
            continue
        }
        arr.push(input);
    }
    return arr
}
get_revenue_expences(expences, "expences");
for (i in expences){
    expences[i] = expences[i]*vat;
}
get_revenue_expences(revenues, "revenues");
function final_balance(account, debit, credit) {
    for (i of debit){
        account = account + parseFloat(i);
        console.log(account);
    }
    for (i of credit){
        account = account - parseFloat(i);
    }
    return account
}
console.log(my_account);
console.log(`My final balance is ${final_balance(my_account,revenues,expences)}`);