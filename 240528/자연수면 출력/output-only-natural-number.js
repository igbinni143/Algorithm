const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = input[0];
let b = Number(input[1]);
let result = [];

if (!isNaN(Number(a))) {
    for (let i = 1; i <= b; i++) {
        result+=a;
    }
} else if (Number(a) <= 0) {
    result = [0];
} else {
    result = 0;
}

console.log(result);