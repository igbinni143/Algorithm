const fs = require ("fs");
let n = Number(fs.readFileSync(0).toString());
let result ="";
let i = n 

while (i>=1) {
    result += i + " "
}

console.log(result);