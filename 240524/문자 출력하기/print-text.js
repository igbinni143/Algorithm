const fs = require("fs");

let input = fs.readFileSync(0).toString();
let result = "";

for (let i = 1; i<=8; i++){
    result += input+""
}

console.log(result);