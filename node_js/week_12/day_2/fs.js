// Exercise 1 : Reading From A File In Node.JS
    // Create a text file and write something inside (example: ‘Some Text To See’)
    // Create an fs.js file, and inside use the Node JS File System 
    // to read the text file and console.log the output in the terminal

const fs_module = require("fs").promises;
async function read_file(){
    const data = await fs_module.readFile(`text.txt`, `utf-8`);
    console.log(data);
};
read_file();
// Exercise 1 : Reading From A File In Node.JS          END

// Exercise 2 : Writing Files With Node JS
    // Create an fs.js file, and use the Node js File System 
    // to create a new text file and write to it.

const data_2 = `Bla bla`;
fs_module.writeFile(`exercise_2.txt`, data_2);
fs_module.appendFile(`exercise_2.txt`,`\nBuy orange juice`,`utf-8`)
fs_module.unlink(`exercise_2.txt`);
// Exercise 2 : Writing Files With Node JS      END
