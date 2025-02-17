const fs = require("fs");
let input = fs.readFileSync(0).toString();
ab = input.split(" ");
a=Number(ab[0]);
b=Number(ab[1]);
a+=b;
b+=a;
console.log(a,b);