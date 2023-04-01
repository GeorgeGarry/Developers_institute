// Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;
if (x > y){
    console.log(x + " is the bigest number");
}
else{
    console.log(y + " is the bigest number");
}
// Exercise 1: Simple If/Else Statement        END

// Exercise 2: Chihuahua

let newDog = "Chihuahua"
console.log("there are " + newDog.length + " letters in Chihuahua ");
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
}
else{
    console.log("I dont care, I prefer cats");
}
// Exercise 2: Chihuahua         END

// Exercise 3: Even Or Odd
let input_num = prompt("give a number");
input_num = parseFloat(input_num);
if (input_num%2 == 0){
    console.log(input_num + " is an even number");
}
else{
    console.log(input_num + " is an odd number");
}
// Exercise 3: Even Or Odd        END
// Exercise 4: Group Chat

const USERS = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "one_more_user"];
if (USERS.length == 0){
    console.log("no one is online");
}
else if (USERS.length == 1) {
    console.log(USERS[0] + " is online");
}
else if (USERS.length == 2){
    console.log(USERS[0] + " and " + USERS[1] + " are online");
}
else{
    console.log(USERS[0] + ", " + USERS[1] + " and " + (USERS.length-2) + " more are online" );
}