const fs = require ("fs");

let input = fs.readFileSync(0).toString().split(" ");
let result = "";
a = Number(input[0]);
b = Number(input[1]);
let i = a;
while (i>=b) {
    if (i%2==0){
        result += i + " ";
    }
    else {
        i = i-1;
        result += i + " ";
    }
    i-=2
}

console.log(result)