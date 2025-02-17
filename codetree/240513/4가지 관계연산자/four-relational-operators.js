let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" "); //여기서 아예 split 처리하는것도 tip

let a = Number(input[0]);
let b = Number(input[1]);


console.log (a >= b ? 1 : 0);
console.log(a > b ? 1: 0);
console.log(a <= b ? 1 : 0);
console.log(a < b ? 1 : 0);