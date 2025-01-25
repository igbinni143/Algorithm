const fs = require("fs");
let input = fs.readFileSync(0).toString();
inputt = input.split(" ");
a = Number(inputt[0]);
b = Number(inputt[1]);

a+=8
b*=3
console.log(a);
console.log(b);
console.log(a*b);