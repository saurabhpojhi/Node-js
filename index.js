
// const a = {
//     average :(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent : (a, b) => {
//         console.log((a/b) *100);
//     },
// };

// module.exports =a;


// const { captureRejectionSymbol } = require("events");


// simple way 

// const fs = require("fs");

// fs.readFile("./sample.txt", "utf-8" ,(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });
// console.log(" i am first");

// // asyns way to 

// const fs = require("fs");
// const a  = fs.readFileSync("./sample.txt", "utf8");

// console.log(a);

// console.log(" i  am first");



// create server

const http = require("http");

const PORT = 2000;
const hostname = " localhost";

  const server = http.createServer((req, res)=>{
    res.end("working");
});

server.listen(PORT, hostname,() =>{
  console.log(" Server is working on http://${}");
});

        
        