const fs = require("fs");

let input = fs.readFileSync(0).toString();

innt = input.split(" ");
a=Number(innt[0]);
b=Number(innt[1]);
c=(a+b)/(a-b)

console.log(c.toFixed(2));