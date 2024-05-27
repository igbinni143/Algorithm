const fs = require ("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);
let result = [];
if (a > b){
    for (let i=b; i<=a; i++) {
        result += i + " ";
    }
}
else {
    for (let i=a; i<=b; i--){
        result += i + " ";
    }
}

console.log(result);