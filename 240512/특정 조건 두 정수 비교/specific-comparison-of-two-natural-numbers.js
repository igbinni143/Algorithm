const fs = require ("fs");
let input = fs.readFileSync(0).toString();
inputs = input.split(" ");
a = Number(inputs[0]);
b = Number(inputs[1]);

if (a<b) {
    console.log(1);
    if (a==b) {
     console.log(1);
    }

    else {
        console.log(0);
    }
}

else {
    console.log(2);
    if (a==b) {
        console.log(1);
    }

    else {
     console.log(0);
    }
}