const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
n = Number(input[1])


for (let i = 0; i<n; i++) {
    a = a+n
    console.log(a)
}