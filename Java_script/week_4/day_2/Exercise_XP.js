// Exercise 1 : Information
    // Part I : function with no parameters
        function infoAboutMe(){
            console.log("My name is Yegor. I'm 31 years old.")
            // or: 
            // return "My name is Yegor. I'm 31 years old"
        };
        infoAboutMe();
        // console.log(infoAboutMe());
    // Part I : function with no parameters         END

    // Part II : function with three parameters
        function infoAboutPerson(personName, personAge, personFavoriteColor){
            console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
        };
        infoAboutPerson("David", 45, "blue");
        infoAboutPerson("Josh", 12, "yellow");
    // Part II : function with three parameters         END

// Exercise 2 : Tips
    function calculateTip() {
        let tip = 0;
        let bill = "";
        let tip_percent = "";
        // the loop
        while (true){
            bill = prompt("What's the bill?");
            if (bill == "stop"){break};  // a backdoor for testing
            if (isNaN(bill) == true){
                alert("please input a number");
                continue;
            }
            else { 
                bill = parseFloat(bill);
                break;
            };
        };
        if (bill <= 50){
            tip = bill*0.2;
            tip_percent = "20%";
        }
        else if (bill <=200){
            tip = bill*0.15;
            tip_percent = "15%";
        }
        else {
            tip = bill*0.1;
            tip_percent = "10%";
        }
        return {my_bill: bill, my_tip: tip, my_tip_percent:tip_percent}
    };
    // let final_check = calculateTip();
    // console.log(`The tip is ${final_check.my_tip}$ (${final_check.my_tip_percent}), and the total is ${final_check.my_tip+final_check.my_bill}$`);
// Exercise 2 : Tips                                END

// Exercise 3 : Find The Numbers Divisible By 23
        function isDivisible(divisor = 23){  
            let outcome_arr = []
            let outcome_sum = 0;
            for ( let i = 0; i <= 500; i++  ){
                if (i%divisor == 0){
                    outcome_arr.push(i);
                    outcome_sum = outcome_sum + i;
                } 
            }
            return [outcome_arr,outcome_sum]
        };
        // an alternative version of function is:
        //  p.s. all variables are the same, just comment out the whole function
            // function isDivisible(divisor = 23){  
            //     let outcome_arr = []
            //     let outcome_sum = 0;
            //     for ( let i = 0; i <= 500; i+=divisor  ){
            //             outcome_arr.push(i);
            //             outcome_sum = outcome_sum + i;
            //     }
            //     return [outcome_arr,outcome_sum]
            // };
        console.log(`Numbers (0-500) that can be devided by 23: \n ${isDivisible()[0].join(" ")}  \n 
        And their sum is: ${isDivisible()[1]}`);
        console.log(`Numbers (0-500) that can be devided by 45: \n ${isDivisible(45)[0].join(" ")}  \n 
        And their sum is: ${isDivisible(45)[1]}`);
// Exercise 3 : Find The Numbers Divisible By 23                END

// Exercise 4 : Shopping List
    const stock = { 
        "banana": 6, 
        "apple": 0,
        "pear": 12,
        "orange": 32,
        "blueberry":1
    };
    const prices = {    
        "banana": 4, 
        "apple": 2, 
        "pear": 1,
        "orange": 1.5,
        "blueberry":10
    };
    let shoppingList = ["banana", "orange", "apple"];
    function myBill(){
        let my_final_bill = 0;
        for (i of shoppingList){
            if (stock[i] > 0){
                my_final_bill += prices[i];
                stock[i] -= 1;
            };
        };
        return my_final_bill;
    };
    // console.log(stock); //checking the stock before the shopping
    console.log(`My total is ${myBill()}$`);
    // console.log(stock); // checking the stock after the shopping
    // Exercise 4 : Shopping List                   END

// Exercise 5 : What’s In My Wallet ?
        /*
        A quarters is 0.25
        A dimes is 0.10
        A nickel is 0.05
        A penny is 0.01
        */
    let price = 4.25;
    let coins_value = [0.25, 0.1, 0.05, 0.01];
    //I've decided to use an object here instead of an array, because I'm terrible with coins' names so I think this way it's more clear 
    let my_wallet = {   
        quarters: 25,
        dimes: 20,
        nickels: 0.05,
        pennies: 0.01
    };
    function changeEnough(itemPrice, amountOfChange){
        if ((amountOfChange.quarters*coins_value[0] + 
            amountOfChange.dimes*coins_value[1] + 
            amountOfChange.nickels*coins_value[2] + 
            amountOfChange.pennies*coins_value[3]) >= itemPrice){
                return true;
            }
        else {return false}

    }
    console.log(changeEnough(price, my_wallet));
// Exercise 5 : What’s In My Wallet ?               END

// Exercise 6 : Vacations Costs
// let stay_duration;
// let destination;
// let rent_duration;
// let total_cost;
// let each_cost;
function  hotelCost(){
    let night_price = 140;
    let stay_duration;
    while (true){  //check input
        stay_duration = prompt("for fow long are you staying?");
        if (stay_duration == "stop"){
            break
        };  // a backdoor for testing
        if (isNaN(stay_duration) == true){
            alert("please input a number")
        }
        else {
            stay_duration = parseInt(stay_duration);
            break;
        };
    }
    return stay_duration*night_price;

};
/*
“London”: 183$
“Paris” : 220$
All other destination : 300$ 
*/

function planeRideCost(){
    
    let flight_cost = 0;
    while(true){
        let destination = prompt("Were are you going?");
        if (destination == "stop"){break};  // a backdoor for testing
        // console.log(typeof(destination), destination);
        destination = destination.toLowerCase();
        // console.log(typeof(destination), destination);
        if (isNaN(destination) == false){
            alert("Please give a destination city");
            continue;
        }
        else if (destination == "london"){
            flight_cost = 183;
        }
        else if (destination == "paris"){
            flight_cost = 220;
        }
        else {
            flight_cost = 300;
        }
        return flight_cost;
    }
}
function rentalCarCost(){
    let car_price = 40;
    let rent_duration;
    while (true){  //check input
        
        rent_duration = prompt("for fow long do you need a car?");
        if (rent_duration == "stop"){break};  // a backdoor for testing
        if (isNaN(rent_duration) == true){
            alert("please input a number")
        }
        else  if (rent_duration <= 10){
            rent_duration = parseInt(rent_duration);
            break;
        }
        else {
            rent_duration = parseInt(rent_duration)*0.95;
            
            break;
        }
    }
    return rent_duration*car_price;
};
function totalVacationCost(){
    let plane_cost = planeRideCost();
    let car_cost = rentalCarCost();
    let hotel_cost = hotelCost();
    let each_cost =  [plane_cost, car_cost, hotel_cost];
    let total_cost = plane_cost + car_cost + hotel_cost;
    return [total_cost, each_cost];
}

let total_vacation_cost = totalVacationCost();
console.log(`The car cost: ${total_vacation_cost[1][1]} , the hotel cost: ${total_vacation_cost[1][2]}, 
the plane tickets cost: ${total_vacation_cost[1][0]}.  
And the total cost is ${total_vacation_cost[0]}`);
// console.log();