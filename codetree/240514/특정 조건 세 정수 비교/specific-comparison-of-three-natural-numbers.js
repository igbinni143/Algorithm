const fs = require ("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);
c = Number(input[2]);

let fr, sr;

if (a <= b && a <= c) {
    fr = 1;
}
else {
    fr = 0;
}

if (a==b && a==c) {
    sr = 1;
}
else {
    sr = 0;
}

console.log(fr, sr);