const fs = require("fs");
let input = fs.readFileSync(0).toString();

let a = Number(input);

console.log(a);

if (a<0) {
    console.log("minus");
}