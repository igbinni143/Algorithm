const fs = require("fs")
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

//console.log(arr);
console.log(arr[0]*arr[1]);