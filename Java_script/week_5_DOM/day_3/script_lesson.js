// console.log("before");
// setTimeout(function(){
//     console.log("hello");
// }, 3000);
// console.log("after");

// let i = 0;
let id;
// id = setInterval(function(){
//     console.log(i++);
// }, 200);
const box = document.getElementById("box")
// let move_vertical = 0;
// let move_horisontal = 0;
let movement = 0;
function mooving(direction, axis){
    // for (let i = 0; i < 4; i++){

    // }
    console.log(direction);
    id = setInterval(function(){
        if (axis === 450){
            stop()
        }
        else if (direction == "left"){
            box.style.left = axis + "px";
            axis++
        }
        else if (direction == "top"){
            box.style.top = axis + "px";
            axis++
        }
        else if (direction == "right"){
            box.style.right = axis + "px";
            box.style.left = 450 - axis + "px";
            axis++
        }
        else if (direction == "bottom"){
            box.style.bottom = axis + "px";
            box.style.top = 450 - axis + "px";
            axis++
        }

    }, 5);
    // movement = 0;
}

// function start_2(){
//     mooving("top", movement);

// }
function start(){
    // const box = document.getElementById("box")
    // id = setInterval(function(){
    //     if (i === 450){
    //         stop();

    //     }
    //     box.style.left = i + "px";
    //     i++
    // }, 5);
    
    // for (i of ["left", "top", "right", "bottom"]){
        mooving("left", 0);
        setTimeout(function(){
            mooving("top", 0)
        }, 5000);
        setTimeout(function(){
            mooving("right", 0)
        }, 10000);
        setTimeout(function(){
            mooving("bottom", 0)
        }, 15000);
    // }
    // mooving("left", movement);
    // movement = 0;
    // mooving("right", movement);
    // movement = 0;
    // mooving("bottom", movement);
    // movement = 0;
}

function stop(){
   clearInterval(id);
//    box.style.left = "0px"
//    box.style.right = "0px"
//    box.style.top = "0px"
//    box.style.bottom = "0px"
}