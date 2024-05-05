const fs = require("fs");
let input = fs.readFileSync(0).toString();

input1 = input.split(" ");
h = Number(input1[0]);
w = Number(input1[2]);
bb = w/((h/100)**2);
b = parseInt(bb);

console.log(b);

if (b >= 25) {
    console.log("Obesity");
}