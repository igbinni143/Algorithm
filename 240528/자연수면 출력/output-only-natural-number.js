const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let result = "";

if (a > 0) {
    result = a.toString().repeat(b);
} else {
    result = "0";
}

console.log(result);