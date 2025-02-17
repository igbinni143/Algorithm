const fs = require("fs");
let input = fs.readFileSync(0).toString();

students = input.split("\n");
sa = students[0];

a = sa.split(" ");
aage = Number(a[0]);
agender = String(a[1]);

sb = students[1];
b = sb.split(" ");
bage = Number(b[0]);
bgender = String(b[1]);

//console.log(aage,agender,bage,bgender);

if ((aage >= 19 && agender == "M") || (bage >=19 && bgender == "M")) {
    console.log("1");
}
else {
    console.log("0");
}