const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let result = [];

if (!isNaN(a)) {
    for (let i = 1; i <= b; i++) {
        result+=a;
    }
} else if (a <= 0) {
    result = 0;
} else {
}

console.log(result);