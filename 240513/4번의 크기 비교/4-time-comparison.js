let fs = require("fs");
let input1 = fs.readFileSync(0).toString();
let input = fs.readFileSync(0).toString().trim().split(" "); 

let a = Number(input1);
let b = Number(input[0]);
let c = Number(input[1]);
let d = Number(input[2]);


console.log (a > b ? 1 : 0);
console.log(a > c ? 1: 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);