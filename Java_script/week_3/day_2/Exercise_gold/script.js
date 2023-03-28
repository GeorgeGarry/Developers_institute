// Exercise 1 : Favorite Color
let sentence = ["my","favorite","color","is","blue"];
let my_new_sentence = sentence.join(" ");
console.log(my_new_sentence);
// Exercise 1 : Favorite Color        END

// Exercise 2 : Mixup
let str1 = "mix";
let str2 = "pod";
// slicing 2 first characters from both strings
let mixer_1 = str1.slice(0,2);
let mixer_2 = str2.slice(0,2);
// swapping those 2 characters in the strings
str1 = str1.replace("mi", mixer_2);
str2 = str2.replace("po", mixer_1);
// console.log(str1); //for test purposes
// console.log(str2); //for test purposes
let str_final;
str_final = str1.concat(" ", str2);
console.log(str_final);
// Exercise 2 : Mixup         END

// Exercise 3 : Calculator
let num_1 = prompt("please input a number");
let num_2 = prompt("please input another number");
num_1 = parseInt(num_1);
num_2 = parseInt(num_2);
console.log(typeof(num_1));
let my_sum = num_1 + num_2;
let my_substract = num_1 - num_2;
let my_devision = num_1 / num_2;
let my_multiplication = num_1 * num_2;



alert("num_1 + num_2  =  " + my_sum + "\n" +
"num_1 - num_2  =  " + my_substract + "\n" +
"num_1 / num_2  =  " + my_devision + "\n" +
"num_1 * num_2  =  " + my_multiplication);
// Exercise 3 : Calculator        END
 


