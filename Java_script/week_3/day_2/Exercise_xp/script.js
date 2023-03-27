// Exercise 1: Your Favorite Food
    console.log("Exercise 1");
    let food = "pizza";
    let meal = "dinner";
    console.log("I eat " + food + " at every " + meal + ".");
// Exercise 1: Your Favorite Food            END

// Exercise 2 : Series
    // Part I
    console.log("Exercise 2/ part 1");
    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    let myWatchedSeriesLength = myWatchedSeries.length;
    // console.log(myWatchedSeriesLength);  // added for a test
    let myWatchedSeriesSentence = myWatchedSeries.toString();
    // console.log(myWatchedSeriesSentence); // added for a test
    console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeries[0] + ", " + myWatchedSeries[1]+ ", and the " + myWatchedSeries[2] );
    // Part II
        // I have to create another array, because the "myWatchedSeries" array has been set as a constant in the exampple
    console.log("Exercise 2/ part 2");
    let my_series = ["black mirror", "money heist", "the big bang theory"]; 
    my_series[2] = "friends";
    myWatchedSeries[2] = "friends"
    my_series.push("suits"); // adding series I've wached in the end
    my_series.unshift("mandalorian"); //adding my your favorite series at the start
    // console.log(my_series); // added for a test
    my_series.splice(1, 1);
    // console.log(my_series); // added for a test
    console.log((my_series[1][2]));
    console.log(my_series);
// Exercise 2 : Series       END

// Exercise 3 : The Temperature Converter
    let my_celcius = 20;
    let my_fahrenheit;
    my_fahrenheit = ((my_celcius/5)*9 + 32);
    console.log(my_celcius + "°C is " + my_fahrenheit + "°F");
// Exercise 3 : The Temperature Converter         END

// Exercise 4 : Guess The Answers #1
    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: It's going to be 55 because 34+21 is 55 and both types are numbers
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23. since we've changed the value of a to 2 - now a+b is gonna be 2 + 21
    // Actual: 23
    // What will be the outcome of a + b in the first expression ?
        //it'll be 55
    // What will be the outcome of a + b in the second expression ?
        //it'll be 23
    // What is the value of c?
        // the value is going to be "Undefined"
    // Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5');
        // the outcome is going to be 75, because girst we add NUMBERS 3+4 which gives us 7. and then we concat a string "5"
// Exercise 4 : Guess The Answers #1       END

// Exercise 5 : Guess The Answers #2
    typeof(15)
    // Prediction: it's going to be a number, because no quotes are added
    // Actual: number

    typeof(5.5)
    // Prediction: it's going to be a number, because no quotes are added and in JS there are no types like float or int such as in python
    // Actual: number

    typeof(NaN)
    // Prediction: I see 3 possible outcomes:
        // 1) it's a bolean
        // 2) it's going to cause an error (because NaN is a method, not a value)
        // 3) it's going to display nothing for the same reason as in 2
    // Actual: it's a number

    typeof("hello")
    // Prediction: string, because it has quoutes around it
    // Actual: string

    typeof(true)
    // Prediction: bolean, because "true" is one of the possible values of boleean type
    // Actual: bolean

    typeof(1 != 2)
    // Prediction: false
    // Actual: because 1 is not equal 2

    "hamburger" + "s"
    // Prediction: hamburgers, because we concate 2 strings here
    // Actual: hamburgers

   "hamburgers" - "s"
    // Prediction: I assume hamburger, because we deduct s from the end of the "hamburgers" string
    // Actual: NaN. because we can't use math deduction with alphabetical values

    "1" + "3"
    // Prediction: 13, because we add 2 strings 
    // Actual: 13

    "1" - "3"
    // Prediction: -2, because even those are strings, the values are still numeric
    // Actual: -2

    "johnny" + 5
    // Prediction: it's not gonna work, cuz we can't add numbers to an alphabetical string
    // Actual: johnny5, as I see here - it converts the number into a string

    "johnny" - 5
    // Prediction: NaN 
    // Actual: NaN, as far as I got it - we can only ADD alphabetical str and a number

    99 * "hello"
    // Prediction: it'll gonna print "hello" 99 times (at least that's the way it works in python)
    // Actual: no display

    1 != 1
    // Prediction: false, cuz 1 is not "not equal" to 1
    // Actual:  false

    1 == "1"
    // Prediction: true, because in case of "==" it doesn't check the type of a value
    // Actual:

    1 === "1"
    // Prediction: false, cuz here we have === . which compares typse as well as the actual characters
    // Actual: false
// Exercise 5 : Guess The Answers #2        END


// Exercise 6 : Guess The Answers #3
    5 + "34"
    // Prediction: 534, cuz here we add sting to a number. and it'll do the math adding only with 2 numeric strincs or 2 numbers
    // Actual: 534

    5 - "4"
    // Prediction: 1, cuz in case of deduction it'll consider value of this string as a number
    // Actual: 1

    10 % 5
    // Prediction: 0, cuz 10/5 = 2.0 and the "0" after 2 is what % is for 
        // P.S. sorry, can't remember the correct word in english for that (just in case in russian - остаток)
    // Actual: 0

    5 % 10
    // Prediction: 5, cuz 5/10 is 0.5 (the reasoning is in the line 144)
    // Actual: 5

    "Java" + "Script"
    // Prediction: JavaScript, we add to strings
    // Actual: JavaScript

    " " + " "
    // Prediction: it's gonna be just 2 empty spaces (so the whole line will be empty and the pointer will go to the next line)
    // Actual: "              "        (that stand for an empty line)  

    " " + 0
    // Prediction: " 0", space bar is still a character for a string value
    // Actual: " 0"

    true + true
    // Prediction: true, cuz if you add 2 truths - it's still gonna be truth
    // Actual: 2, now I see - "true" stands not only for "true" but also for "1"

    true + false
    // Prediction: 1, same reason as in line 166
    // Actual: 1

    false + true
    // Prediction: 1, same reason as in line 166
    // Actual: 1

    false - true
    // Prediction: 0-1=-1.
    // Actual: -1

    !true
    // Prediction: false, cuz that's what is not equal tu true
    // Actual: false

    3 - 4
    // Prediction: -1, cuz 3-4=-1
    // Actual:

    "Bob" - "bill"
    // Prediction: NaN, cuz we can't substract strings from strings
    // Actual:NaN






