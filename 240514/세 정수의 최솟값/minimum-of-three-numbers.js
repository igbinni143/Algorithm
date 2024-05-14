const fs = require ("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);
c = Number(input[2]);

let fr, sr;

if (a <= b && a <= c) {
    console.log(a);
}
else if (b<=a && b<=c) {
    console.log(b);
}

else if(c<=a && c<=b) {
    console.log(c);
}

else {
    console.log("몰라");
}