// it is used  create server 

const http = require("http");

const server = http.createServer(function(req,res){

    res.writeHead(200,{"content-type":"test/plain"});
    res.write("node js coding")    
    res.end();

}).listen(3000,()=>{console.log("server running on port 3000")});
