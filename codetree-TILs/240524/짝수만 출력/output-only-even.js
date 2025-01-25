const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);

let i = a;
let result ="";


while (i <= b) {
    if (i %2 ==0) {
    result += i + " ";
    }
    else if (i %2 ==1) {
        i +=1
        result += i + " ";
    }
    i+=2
}
console.log(result)