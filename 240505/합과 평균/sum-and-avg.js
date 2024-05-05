const fs = require("fs");
let input = fs.readFileSync(0).toString();
arr = input.split(" ");

a = Number(arr[0]);
b = Number(arr[1]);
c = ((a+b)/2).toFixed(1);


console.log(a+b,c);