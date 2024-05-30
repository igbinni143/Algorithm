const fs = require ("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let li = [];

li = a + " "

for (let i = a; a<=b; i++) {
    if (a % 2 == 1) {
        a = a*2
        if (a <= b) {
            li = a + " ";
        }
    }
    else if (a % 2 == 0) {
        a = a+3
        if (a <= b) {
            li = a + " ";
        }
    }
}


console.log(li);