const fs = require ("fs");
let input = fs.readFileSync(0).toString().split(" ");
a = Number(input[0]);
b = Number(input[1]);
c = Number(input[2]);

if (a > b && a>c) {
    if (b>c) {
        console.log (b);
    }
    else {
        console.log(c);
    }
}
else if (b > a && b>c){
    if (a>c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (c > a && c>b){
    if (a>b) {
        console.log(a);
    }
    else{
        console.log(b);
    }
}