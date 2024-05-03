const fs = require("fs");
let input = fs.readFileSync(0).toString();
ab = input.split("\n");
a=Number(ab[0]);
a+=87;
b=Number(ab[1]);
console.log(a);
console.log(b%10);