const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

b = Number(input[0]);
a = Number(input[1]);
let result =""

for (let i=b; i>=a; i-=2) {
    result += i + " "
}

console.log(result);