const fs = require("fs");
let arr = fs.readFileSync(0).toString();
aaa = arr.split("\n")

a = Number(aaa[0])
b = Number(aaa[1])

console.log((a+b).toFixed(2));