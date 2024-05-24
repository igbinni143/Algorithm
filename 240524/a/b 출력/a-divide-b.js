const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let www = ""

a = Number(input[0]);
b = Number(input[1]);

c = (a/b);
c2 = c.toString();
c3 = c2.split(".");

clength = c2.length;
wlength = 21-clength;

for (let i = 0; i<=wlength; i++ ) {
    www+="0"
    c2 += www
}

console.log(cw);