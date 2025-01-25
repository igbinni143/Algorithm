const fs = require("fs");
let input = fs.readFileSync(0).toString();
inputs = input.split(" ");
a = Number (inputs[0])
b = Number (inputs[1])

if (a % 2==0){
    console.log("even");
}

else {
    console.log("odd");
}

if (b % 2==0){
    console.log("even");
}

else {
    console.log("odd");
}