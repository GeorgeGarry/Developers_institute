                // 💡Please change in the package.json file scripts.start to the💡
                // 💡"start": "nodemon server.js"💡


// Exercise 2 : HTTP & JSON
    // Create a server file, name it - server.js 🟢I'm gonna use th
    // In this file, use http to create a server. Send the below Javascript Object to the browser:
        const user = {
            firstname: 'John',
            lastname: 'Doe'
        }
    // Hint : use JSON.
    // 3. Your server should run on http://localhost:8080/


const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
const { json } = require('body-parser');
app.use(express.json());
app.listen(8080,()=>{
    console.log("runs at 8080");
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.json(user);
    });