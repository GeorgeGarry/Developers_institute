const fs_module = require("fs").promises;
// const fs_module = require("fs");

                        // READING FILES
// try{
//     const data = fs_module.readFileSync(`info.txt`,`utf-8`);

//     console.log(data);

// }
// catch(err){
//     console.log(err.message);
// }

// fs_module.readFile(`info.txt`,`utf-8`, (err,data) =>{
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });
// console.log(`The file has been read`);

                           // WRITING TO A FILE

// const data_2 = `this is my hello file`;
// fs_module.writeFile(`hello.txt`);
//  const data_2 = [
//       {id:1,name:'Iphone',price:8000},
//       {id:2,name:'Ipad',price:1111},
//       {id:3,name:'iwatch',price:2222},
//     ];
    
//     fs_module.writeFile('products', JSON.stringify(data_2), 'utf-8', (err)=>{
//       if(err) console.log(err);
//     })
    

// fs_module.copyFile(`hello.txt`, `hello_2.txt`, err => {console.log(err);})


// fs_module.mkdir("data_dir", err=>{});


// fs_module.readdir(`.`,(err,files)=>{
//     console.log(files);
// })

// fs_module.appendFile(`hello.txt`,`2374`,`utf-8` err => {})

const start = async() =>{
    const data = await fs_module.readFile(`hello.txt`, `utf-8`);
    console.log(data);
};
start();

