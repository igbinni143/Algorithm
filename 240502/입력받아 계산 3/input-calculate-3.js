const fs = require("fs");
let input = fs.readFileSync(0).toString();
arr = input.split("\n")

a = Number(arr[0]);
b = Number(arr[1]);

console.log(a*b);