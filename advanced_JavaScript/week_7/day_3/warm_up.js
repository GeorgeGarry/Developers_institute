/**
 * 
Write a function called 'solution' that given a string S
consisting on N letters 'a' and /or 'b'
returns true where all occurrences of letter 'a'
before all occurrences of letter 'b',
and returns false otherwise

Write an efficient algorithm within for the following assumptions:
N is an integer within the range [1...300000]
string S is made only of the characters 'a' and/or 'b'
note that 'b' does not need to occur is S should return true
note that 'a' does not need to occur is S should return tr
 */
let str = "baaabaabbaa";
// let str = "aaabaabbaa";
// let str = "aaab";
// let str = "a";
// let str = "b";
// console.log(str.includes("a"));
function solution(str) {
    let my_arr = str.split("");
    // console.log(my_arr);
    if (str.includes("a") == false){
        console.log("reason 1");
        return true
    };
    if (str.includes("b") == false){
        console.log("reason 2");
        return true
    };
    if (my_arr[0] == "b"){
        console.log("reason 3");
        return false
    };
    let b_first = 0;
    for (i in my_arr){
        if (my_arr[i] == "b"){
            b_first = i;
            break
        }
    };
    for (let i = b_first; i < my_arr.length; i++){
        if (my_arr[i] == "a"){
            console.log(`reason 4`);
            return false
        }
        
    };
    return true
}

function solution_2(str) {
    let len = str.length;
    let found_a = -1;
    let found_b = -1;

    for (let i = 0; i < len; i++){
        if (str[i] === "a"){
            found_a = i;
        }
        else if (str[i] == "b"){
            found_b = i;
        };
        if (found_b < found_a && found_b !== -1 && found_a !== -1){
            return false
        }
    }
    return true;   
};

function solution_3(str) {
    let found_b = false;
    let len = str.length;
    for (let i = 0; i < len; i++){
        if(str[i] == "b"){
            found_b = true;
        }
        else if (found_b === true){
            return false
        };
    };
    return true  
}

// console.log(solution(str));

function testSolution() {
    const testCases = [
      { input: 'aabbb', output: true },
      { input: 'ba', output: false },
      { input: 'aaa', output: true },
      { input: 'b', output: true },
      { input: 'abba', output: false },
      { input: 'a', output: true },
      { input: 'bbaa', output: false },
      { input: 'bbba', output: false },
      { input: 'aabb', output: true },
      { input: 'bababab', output: false },
      { input: 'babababa', output: false },
      { input: 'aabababb', output: false },
        { input: 'baaab', output: false },
      { input: 'bbabbabbababbab', output: false },
      { input: 'babaabaaab', output: false },
      { input: 'ab', output: true }
    ];
  for (let i = 0; i < testCases.length; i++) {
    
      const { input, output } = testCases[i];
      const result = solution_3(input);
      console.log(`Input: "${input}", Output: ${result}, Expected Output: ${output}`);
    }
  }
  
testSolution();