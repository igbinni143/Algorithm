const fs = require("fs");
let s = fs.readFileSync(0).toString().trim();

ss = s.split("\n")
c = (ss[0])
a = Number(ss[1]).toFixed(2);
b = Number(ss[2]).toFixed(2);

console.log(c);
console.log(a);
console.log(b);