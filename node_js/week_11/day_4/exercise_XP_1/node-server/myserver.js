                // 💡Please change in the package.json file scripts.start to the💡
                // 💡"start": "nodemon myserver.js"💡

// Exercise 1 : HTTP
            // In this file, use http to create a server. You should return at least three different lines of HTML to the browser. 
            // (Use only HTML tags, no HTML files)
            // Your server should run on http://localhost:3000/


            
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.listen(3000,()=>{
    console.log("runs at 3000");
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>This is my first response</h1>
                    <h2>This is my second response</h2>
                   <h4>This is my third response</h4>`);
  });



