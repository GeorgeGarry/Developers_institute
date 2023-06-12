const { time } = require("console");

const largeNumber = 356;

module.exports = {
    largeNumber,
    current_date_time
};

// Part III:
// In the main.js, create a function that returns the current date and time. 
// Export the module.
// Use the exported module in a script.js file.
// Create a server with http and set the response header to 'text/html'. 
// Respond with an HTML paragraph that outputs the current date and time from the exported module.
// Your server should run on http://localhost:8080/

function current_date_time(){
    
    const today = new Date();
    const weekday = {
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
        7:"Sunday"
    };
    const date = weekday[`${today.getDay()}`]+" "+today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
    const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    return [date,time]
}

// console.log(current_date_time());