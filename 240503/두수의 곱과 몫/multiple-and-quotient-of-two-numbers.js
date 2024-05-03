const fs = require("fs");
let input = fs.readFileSync(0).toString();
inputt = input.split(" ");
a = Number(inputt[0]);
b = Number(inputt[1]);

console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${a/b}`);