const fs = require ("fs");
let input = fs.readFileSynce(0).toString();
inputs = input.split(" ");
a = inputs[0];
b = inputs[1];

if (a<b) {
    console.log(1);
}

else {
    console.log(2);
}

if (a=b) {
    console.log(1);
}

else {
    console.log(0);
}