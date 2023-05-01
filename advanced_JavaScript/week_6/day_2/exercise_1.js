//I've marked answers with Breackpoints

// Exercise 1 : Scope
    // Analyse the code below, and predict what will be the value of a in all the following functions.
    // Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
        // it's going to give a error, because you can't change the value of constants

//#2
// let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
        // first time funcThree will show 0, then error on funcTwo


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// funcFour()  // this doesn't change the value of a in this code.  window.a - is a browser object
// funcFive()

//#4
    // let a = 1;
    // function funcSix() {
    //     let a = "test";
    //     alert(`inside the funcSix function ${a}`);
    // }


// #4.1 - run in the console:
    // funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
    //nothing will change regardless where do you declare as const, 
    // because function is a block object

//#5
const a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
        // nothing will change, same reason - because we have a block object here