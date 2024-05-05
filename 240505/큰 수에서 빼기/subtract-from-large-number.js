const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = input.split(" ");
a=arr[0];
b=arr[1];

if (a>=b) {
    console.log(a-b);
}

if (a<b) {
    console.log(b-a);
}