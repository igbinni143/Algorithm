const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
n = Number(input)
nn = n**2;

console.log(nn);

if (n < 5) {
    console.log("tiny");
}