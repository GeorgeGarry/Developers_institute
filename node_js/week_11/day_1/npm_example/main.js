const axios  = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
.then(resp => 
        {if(resp.status === 200){
            console.log(resp)};
            }
    );
