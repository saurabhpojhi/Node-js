// using commonjs syntax

const fs = require('fs/promises');


// read file in fs
fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err,data)
})
console.log("finishing reading file ")