const http = require("http");
const server = http.createServer((req,resp)=>{
    if (req.url == "/"){
        resp.end('<h1>Home</h1>')
    }
    else if (req.url == "/about"){
        resp.end('About')
    }
    else{
        resp.end('<h1>404 page not found</h1>')
    }
    
});

server.listen(3001, () => {
    console.log("runs on port 3001");
});