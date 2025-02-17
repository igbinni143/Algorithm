const fs = require ("fs");
let input = fs.readFileSync(0).toString();
inputs = input.split(" ");
a = Number(inputs[0]);
b = Number(inputs[1]);

if (a<b) {
    process.stdout.write('1 ');
}

else {
    process.stdout.write('0 ');
}

if (a==b) {
    process.stdout.write('1');
}

else {
    process.stdout.write('0');
}