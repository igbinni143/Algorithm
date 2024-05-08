const fs = require("fs");
let input = fs.readFileSync(0).toString();

input1 = input.split(" ");

a = Number(input1[0]);
b = Number(input1[1]);

if (a>b) {
    console.log(a*b)
}
else {
    console.log(parseInt(b/a))
}