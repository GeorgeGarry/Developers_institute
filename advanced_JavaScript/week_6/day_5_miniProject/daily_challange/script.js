// Create a function that returns true if all parameters are truthy, and false otherwise.
// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

let arr_1 = [true, true, true];
let arr_2 = [true, false, true];
let arr_3 = [5, 4, 3, 2, 1, 0];
let arr_4 = [1,1,1,1]

console.log(arr_1.every(all_truth));
console.log(arr_2.every(all_truth));
console.log(arr_3.every(all_truth));
console.log(arr_4.every(all_truth));

function all_truth(is_true){
    return is_true
}
