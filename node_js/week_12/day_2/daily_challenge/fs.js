const { log } = require("console");

const fs_module = require("fs").promises;
async function read_file(){
    let minus_one_position_steps;
    let first_time = true;
    let position = 0
    let data = await fs_module.readFile(`RightLeft.txt`, `utf-8`);
    for (i in data){
        if (data[i] == ">"){
            position++
        }
        else if (data[i] == "<"){
            position--
        }
        if (position == -1 && first_time){
            minus_one_position_steps = i
            first_time = false
        };
    }
    


    console.log(`
    The final position is ${position}
    Steps needed to hit -1 for the first time is ${minus_one_position_steps}`); 
};

read_file()