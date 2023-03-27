// // 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

// 2. Display dog

// 3. Add to the array pets, the pet horse. Remove the pet rabbit

// 4. Display the array length\
console.log("************");
let my_pets = ['cat','dog','fish','rabbit','cow'];
console.log((my_pets[1]));
my_pets.push("horse");
console.log((my_pets));
my_pets.splice(3, 1);
console.log((my_pets));
console.log(my_pets.length);