const fs = require("fs");
let abc = fs.readFileSync(0).toString();
aabbcc = abc.split("\n");
a = Number(aabbcc[0]);
b = Number(aabbcc[1]);
c = Number(aabbcc[2]);


console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));