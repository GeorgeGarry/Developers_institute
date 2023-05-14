// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// let test_str_1 = "Astronomer";
// let test_str_2 = "Moon stqrer";

// let test_str_1 = "School master";
// let test_str_2 = "The classroom";

let test_str_1 = "The Morse Code";
let test_str_2 = "Here come dots";

function is_anagram(str_arr_1, str_arr_2){
    [str_arr_1,str_arr_2] = [str_arr_1.replaceAll(" ", ""), str_arr_2.replaceAll(" ", "")];
    if (str_arr_1.length != str_arr_2.length){
        return false
    };
    //⬇⬇⬇⬇ turn both strings to upper case -> make an array of them -> sort it in alphabetic order ⬇⬇⬇⬇⬇⬇
    [str_arr_1,str_arr_2] = [str_arr_1.toUpperCase().split("").sort(), str_arr_2.toUpperCase().split("").sort()];
    
    for (i in str_arr_1){
        if (str_arr_1[i] != str_arr_2[i]){
            return false
        }
    };
    return true
};

console.log(is_anagram(test_str_1, test_str_2));