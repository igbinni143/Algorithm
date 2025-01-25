const fs = require("fs");
let aabbcc = fs.readFileSync(0).toString();

abc = aabbcc.split("\n");
abab=abc[0].split(" ");
a=Number(abab[0]);
b=Number(abab[1]);
c=Number(abc[1]);

console.log(a,b,c)