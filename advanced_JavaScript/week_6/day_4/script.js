// Exercise 1 : Find The Sum
    // Create a one line function (ie. an arrow function) 
    // that receives two numbers as parameters and returns the sum.
    const func_sum = (x,y) => x+y

    console.log(func_sum(3,4));
// Exercise 1 : Find The Sum                END

//  Exercise 2 : Kg And Grams
    
    //Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

    //First, use function declaration and invoke it.
    gramm_declare(5);
    function gramm_declare(kg){
        console.log(kg*1000);
    }
    // gramm_declare(5)
    //Then, use function expression and invoke it.
    // gramm_expression(4)
    const gramm_expression = function(kg){
        console.log(kg*1000)
    }
    gramm_expression(4);
    //Write in a one line comment, the difference between function declaration and function expression.
            //with function expression you can only invoke it after declaration of the variable  (like in line 19)
    //Finally, use a one line arrow function and invoke it.
    const gramm_arrow_line = kg => console.log(kg*1000);
    gramm_arrow_line(3);
//  Exercise 2 : Kg And Grams               END

// Exercise 3 : Fortune Teller
    //Create a self invoking function that takes 4 arguments: 
    // number of children, partner’s name, geographic location, job title.
        // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
        // and married to <partner's name> with <number of children> kids."

    (function(job = "Full Stack Developer", location = "New York", partner_name = "Karen", children = 3 ) {
        let my_p = document.createElement("p");
        my_p.innerText = `You will be a ${job} in ${location}, and married to ${partner_name} with ${children} kids.`
        document.body.appendChild(my_p);
    })();
// Exercise 3 : Fortune Teller                  END

// Exercise 4 : Welcome
    // John has just signed in to your website and you want to welcome him.
    // Create a Bootstrap Navbar in your HTML file.
    // In your js file, create a self invoking funtion that takes 1 argument: 
    // the name of the user that just signed in.
    // The function should add a div in the nabvar, displaying the name of the user and his profile picture.
    (function(name = "John"){
        let welcome_div = document.createElement("div");
        welcome_div.innerHTML = `Welcome, <span style="color:red">${name}</span>! Please, have a seat.`;
        let profile_pic = document.createElement("img");
        profile_pic.src = "https://i.pinimg.com/474x/fa/ba/54/faba5498b3167071dc93e22f3ce1e22a.jpg";
        profile_pic.style.width = "50px";
        document.getElementById("welcome_navbar").appendChild(profile_pic);
        document.getElementById("welcome_navbar").appendChild(welcome_div);
    })();
// Exercise 4 : Welcome                 END

// Exercise 5 : Juice Bar
    // Part I:
        // The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small,
        // medium or large.

        // The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like 
        
        // The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
        
        // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
    function make_juice(size) {
        function add_ingtidients(ingr_1, ingr_2, ingr_3) {
            return [ingr_1, ingr_2, ingr_3]
        }
        let ingridients = add_ingtidients("banana", "mango", "blueberry");
        return `The client wants a ${size} juice, containing ${ingridients[0]}, ${ingridients[1]}, ${ingridients[2]}`
    }
    console.log(make_juice("medium"));

    // Part II:
        // In the makeJuice function, create an empty array named ingredients.
        // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
        // Create a new inner function named displayJuice that displays on the DOM a sentence like 
        // The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
        // Use the forEach method.
        // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
        // Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
    function make_juice_v2(size) {
        let ingridients = [];
        function add_ingtidients(ingr_1, ingr_2, ingr_3) {
            ingridients.push(ingr_1);
            ingridients.push(ingr_2);
            ingridients.push(ingr_3);
        };
        add_ingtidients("mango", "strawberry", "apple");
        add_ingtidients("pineapple", "kiwi", "melon");
        function display_juice(){
            let juice_order = document.createElement("p");
            juice_order.innerText = `The client wants ${size} juice, containing: `
            ingridients.forEach( (item, index) => {
                juice_order.innerText += `${item}`;
                    if (index != ingridients.length-1){
                        juice_order.innerText += `, `;
                    }
                    else if (index == ingridients.length-1){juice_order.innerText += `.`};
                });
            document.body.appendChild(juice_order);
        };
        display_juice();
    }
    make_juice_v2("large");
// Exercise 5 : Juice Bar                   END


