const fs = require("fs");
let input = fs.readFileSync(0).toString();
arr = input.split(" ")

a = Number(arr[0]);
b = Number(arr[1]);
c = Number(arr[2]);
d = ((a+b+c)/3).toFixed(0);
console.log(a+b+c);
console.log(d);