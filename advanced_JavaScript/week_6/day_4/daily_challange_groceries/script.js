let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
    // Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
    // Use the forEach method. 
function display_groceries(obj, my_key) {
    obj[my_key].forEach(item => {
        console.log(item);
    }); 
    
}
display_groceries(groceries, "fruits");

    // Create another arrow function named cloneGroceries.
    let clone_groceries = () => {
        let shopping = groceries
        // shopping.totalPrice = "35$"
        console.log("shopping", shopping);
        let user = client
        console.log(`user is ${user}`);

    }
    // groceries.totalPrice = "35$"
    clone_groceries();
    client = "Betty"
    console.log(`client is ${client}`);
    groceries.totalPrice = "35$"


    groceries.other.payed = false
    console.log("groceries", groceries);
    


    // In the function, create a variable named user that is a copy of the client variable. 
    // (Tip : make the user variable equal to the client variable)
    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
            
            //▶️▶️▶️▶️▶️ no, because we change client after  because variables pass by value 

    // In the function, create a variable named shopping that is equal to the groceries variable.
    // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
           
            //▶️▶️▶️▶️▶️ No, unless we change the price before creating the shopping obj, because here it's still "first layer"
            //▶️▶️▶️▶️▶️ of the object and here data still passed by value
    
    // Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
            
            //▶️▶️▶️▶️▶️ this time - Yes, because we've made a copy of the object groceries and inside that - we have 
            //▶️▶️▶️▶️▶️ another object on lvl 2, for which data is passed by the refference