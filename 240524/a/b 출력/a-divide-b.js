const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let www = ""

a = Number(input[0]);
b = Number(input[1]);

c = (a/b);
c2 = c.toString().trim();
c3 = c2.split(".");

clength = c2.length;
wlength = 21-clength;

for (let i = 0; i<=wlength; i++ ) {
    c2 += "0"
}


console.log(c2);