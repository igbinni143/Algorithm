const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);
let i = a;
let result =""


while (i <= b) {
    result += i + " ";
    i+=1
}
console.log(result)