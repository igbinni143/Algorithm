const fs = require("fs");
let s = fs.readFileSync(0).toString().trim();

ss=s.split("\n")

console.log(ss[1]);
console.log(ss[0]);