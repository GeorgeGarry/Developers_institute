//  Exercise 1 : List Of People
    //Part I - Review About Arrays
    let people = ["Greg", "Mary", "Devon", "James"];
    people.splice(0,1);
    // console.log(people);
    let arr_to_str_tmp = people.join();
    console.log(arr_to_str_tmp);
    arr_to_str_tmp = arr_to_str_tmp.replace("James", "Jason");
    people = arr_to_str_tmp.split(",");
    // console.log(people);
    people.push("Yegor");
    // console.log(people);
    console.log(people.indexOf("Mary"));
    let people_copy = people.slice(1, (people.length-1));
    console.log(people_copy);
    console.log(people.indexOf("Foo")); // function .indexOf() returns -1 if there is no such element in the array
    let last = people[(people.length-1)];
    let last_copy = people_copy[(people_copy.length-1)];
    console.log(last, last_copy);
    //Part I - Review About Arrays    END

    //Part II - Loops
    for (i of people){
        console.log(i);
        // if (i === "Jason"){      //this is a condition if we need to break after "Jason" was displayed
        //     break
        // }
    }
    //Part II - Loops                 END
//  Exercise 1 : List Of People           END

//Exercise 2 : Your Favorite Colors
let colors = ["green", "red", "purple", "blue", "brown", "beige"];
let arr_suffix = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

for (i in colors){
    console.log("My " + arr_suffix[i] + " choice is " + colors[i] );
}
// Exercise 2 : Your Favorite Colors             END

// Exercise 3 : Repeat The Question
    //Here I believe that while(true) loop is more relevant, because
    // we need to promt on every iteration. 
// while(true){
//     let my_input = prompt("please enter a number");
//     if (parseInt(my_input) != my_input){
//         alert("it's not a number");
//         my_input = parseInt(my_input);
//         continue;
//     }

//     else if (my_input >= 10 ){
//             alert("good job");
//             break;
//         }
//     alert("the number should be not less then 10");
    
//     // if (my_input == "stop"){  //I've added this condition here as a backdoor 
//     //     break;                //to avoid infinite looping while testing
//     // }
// }
// Exercise 3 : Repeat The Question             END

//  Exercise 4 : Building Management
//1 Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2 Console.log the number of floors in the building.
console.log(building.numberOfFloors); 
//3 Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
//4 Console.log the name of the second tenant and the number of rooms he has in his apartment. 
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0] );
//5 Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1] ){
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);
//  Exercise 4 : Building Management                    END

//Exercise 5 : Family
//1 Create an object called family with a few key value pairs.
let my_family = {
    mother: "Olga",
    father: "Dmitriy",
    brother: "Oleg",
}
//2 Using a for in loop, console.log the keys of the object.
for (i in my_family){
    console.log(i);
}
//3 Using a for in loop, console.log the values of the object.
for (i in my_family){
    console.log(my_family[i]);
}
//Exercise 5 : Family                   END

// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
//1 Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let my_str = "";
for (i in details){
    my_str = my_str + i + " " + details[i];
    if (details[i] == "Rudolf"){
        my_str = my_str.concat(",");
    }
    my_str = my_str  + " ";
}
my_str = my_str.slice(0, my_str.length-1); // here I erase the last space bar that is added in the for loop
console.log(my_str);
// Exercise 6 : Rudolf                      END

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let fist_letters = [];
for (i of names){
    fist_letters.push(i[0]);
}
fist_letters.sort();
fist_letters = fist_letters.join("");
console.log(fist_letters);
// Exercise 7 : Secret Group                END
