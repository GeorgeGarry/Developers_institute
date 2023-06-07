// Part I:
    // Create a file named main.js that contains a variable const largeNumber = 356; 
    // and export the module.
    // Use the exported module in a script.js file.
    // In the script.js file declare a variable const b = 5; 
    // and use it to output the sum of the imported module + b
const b = 5;
const {largeNumber} = require("./main.js");
const par_1_res = b+largeNumber
console.log(largeNumber);
// Part I:              END

// Part II:
    // In the script.js file create a server using the http module (require('http')). 

    // Create a server instance and bind it at port 3000. 
    // Therefore your server should run on http://localhost:3000/. 
    // When the server run, you should console.log("I'm listening") in the terminal.

    // Set the response header to res.setHeader('Content-Type', 'text/html')

    // Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", 
    // and an HTML <h1> saying “Hi there at the frontend”
        
const http = require("http");
const server = http.createServer((req,resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.end(`My Module is ${par_1_res}
                <h1>Hi there at the frontend</h1>`);
});
server.listen(3000, () => {
    console.log(" I'm listening. Port 3000");
});

// Part II:              END

// Part III:
// In the main.js, create a function that returns the current date and time. 
// Export the module.
// Use the exported module in a script.js file.
// Create a server with http and set the response header to 'text/html'. 
// Respond with an HTML paragraph that outputs the current date and time from the exported module.
// Your server should run on http://localhost:8080/


                        // 💡Uncomment to check💡

            // const {current_date_time} = require("./main.js");
            // console.log(current_date_time());


            // const http = require("http");
            // const server_8080 = http.createServer((req,resp)=>{
            //     let [date,time] = current_date_time();
            //     resp.setHeader('Content-Type', 'text/html');
            //     resp.end(`<h1>Today is: ${date} ${time}</h1>`);
            // });
            // server_8080.listen(8080, () => {
            //     console.log("mytest...Port 8080");
            // });

                    // 💡Uncomment to check💡

// Part III:                        END

