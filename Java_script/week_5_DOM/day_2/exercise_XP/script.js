// Exercise 1 : Change The Article
    // Using a DOM property, retrieve the h1 and console.log it.
        const H1 = document.getElementsByTagName("h1");
        // console.log(H1[0].innerText);
        console.log(H1[0]);

    // Using DOM methods, remove the last paragraph in the <article> tag.
        const Paragraph = document.getElementsByTagName("p");
        Paragraph[3].remove();
    // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
        const H2 = document.getElementsByTagName("h2");
        H2[0].addEventListener("click", function(){H2[0].style.backgroundColor = "red"} );
    // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
        const H3 = document.getElementsByTagName("h3");
        H3[0].addEventListener("click", function(){H3[0].style.display = "none"} );
    // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
        const Button = document.getElementById("bold_button");
        Button.addEventListener("click", function(){
            make_bold(Paragraph)
        });

        function make_bold(elem){
            for (i of elem){
                i.style.fontWeight = "bold"
            }
        };
    // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

        H1[0].addEventListener("mouseover", function(){random_font_size(H1[0])})

        function random_font_size (elem){
            let my_random1_100 = Math.floor(Math.random() * 100);
            elem.style.fontSize = `${my_random1_100}px`
        }

    // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
        function fade_out(elem) { 
            let fade_effect = setInterval(function () {
                if (!elem.style.opacity) {
                    elem.style.opacity = 1;
                }
                if (elem.style.opacity > 0) {
                    elem.style.opacity -= 0.1;
                } else {
                    clearInterval(fade_effect);
                }
            }, 100);
        }

        Paragraph[1].addEventListener("mouseover", function(){fade_out(Paragraph[1])});
// Exercise 1 : Change The Article                  END

// Exercise 2 : Work With Forms
    // Retrieve the form and console.log it.
        const my_form = document.getElementsByTagName("form")[0];
        console.log(my_form);

    // Retrieve the inputs by their id and console.log them.
        const input_name_byId = document.getElementById("fname");
        const input_surname_byId = document.getElementById("lname");
        console.log(input_name_byId, input_surname_byId);
// Retrieve the inputs by their name attribute and console.log them.
        const input_name_byAttribute = document.getElementsByName("fname")[0];
        const input_surname_byAttribute = document.getElementsByName("lname")[0];
        console.log(input_name_byAttribute, input_surname_byAttribute);
/*
    When the user submits the form (ie. submit event listener)
        use event.preventDefault(), why ?
        get the values of the input tags,
        make sure that they are not empty,
        create an li per input value,
        then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/
        const my_submit = document.getElementById("submit");
        console.log(my_submit);
        const user_answers = document.getElementsByClassName("usersAnswer")[0];
        my_submit.addEventListener("click", function(event){
            event.preventDefault()
            let user_input_name = document.createElement("li");
            let user_input_surname = document.createElement("li");
            if (input_name_byAttribute.value == "" || input_surname_byAttribute.value == ""){
                alert("Can't leave empty space");
                return false
            }
            user_input_name.innerText = input_name_byAttribute.value;
            user_input_surname.innerText = input_surname_byAttribute.value;
            // console.log(user_input_name, user_input_surname);
            user_answers.appendChild(user_input_name);
            user_answers.appendChild(user_input_surname);
            console.log(user_answers);
        })
// Exercise 2 : Work With Forms                     END

//  Exercise 3 : Transform The Sentence
    // Declare a global variable named allBoldItems.
        var allBoldItems = [];
    /* 
    Create a function called getBold_items() that takes no parameter. 
    This function should collect all the bold items inside the paragraph 
    and assign them to the allBoldItems variable.
    */
        const strong = document.getElementsByTagName("strong"); //This code gets a list of all the bold elements
            //This function only helps to get the text that is bold (not the element itself)
        function getBold_items() {
        for (i of strong){
            allBoldItems.push(i.innerHTML)
        }
        }
        getBold_items()
        console.log(allBoldItems);
    //Create a function called highlight() that changes the color of all the bold text to blue. 
        function  highlight(elem) {
            for (i of elem){
                i.style.color = "blue";
            }
        }
    //Create a function called return_normal() that changes the color of all the bold text back to black. 
    function  return_normal(elem) {
        for (i of elem){
            i.style.color = "black";
        }
    }
    /*
    Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
    and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the 
    paragraph). Look at this example
     */
        const my_paragraph = document.getElementById("change_color_paragraph");
        my_paragraph.addEventListener("mouseover", function(){
            highlight(strong);
        })
        my_paragraph.addEventListener("mouseleave", function(){
            return_normal(strong);
        })
//  Exercise 3 : Transform The Sentence                 END

// Exercice 4 : Volume Of A Sphere
    // Write a JavaScript program to calculate the volume of a sphere.  
        // V=4/3πr3
        // console.log(Math.PI)
        const radius_input = document.getElementById("radius");
        const calculate_button = document.getElementById("submit_radius");
        const volume_result = document.getElementById("volume");

        calculate_button.addEventListener("click", function(event) {
            event.preventDefault()
            if(isNaN(radius_input.value)){
                alert("must input a number")
                return false
            }
            volume_result.value = radius_input.value ** 3 * 4/3 * Math.PI;
        })
// Exercice 4 : Volume Of A Sphere                  END

// Exercise 5 : Event Listeners
    // Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
    // Each listener should do a different thing, for instance - change position x, change position y, change color, 
    // change the font size… and more.
        const my_div = document.getElementById("exercise_5");
        var click_count = 0;

        function single_click(){
            my_div.style.width = "150px";
            alert("one click");
        };

        function double_click(){
            alert("STOP CLICKING AT ME!!!!");
        };

        my_div.addEventListener("click", function () {
            click_count++
            if (click_count == 1){
                timer = setTimeout(function() { 
                    click_count = 0;
                    single_click(); 
                }, 200);
                
            }
            else if (click_count == 2){
                click_count = 0;
                clearTimeout(timer);
                double_click();
            }
           
        });

        my_div.addEventListener("mouseover", function(){
            my_div.style.backgroundColor = "yellow";
        });

        my_div.addEventListener("mouseout", function(){
            my_div.style.backgroundColor = "red";
        });
// Exercise 5 : Event Listeners             END

        
        
        

