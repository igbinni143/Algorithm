const fs = require("fs");
let input = fs.readFileSync(0).toString();

a = input.split(" ");
msc = Number(a[0]);
fsc = Number(a[1]);

if (msc >= 90 && fsc >=95) {
    console.log("100000");
}
else if (msc >= 90 && fsc >=90) {
    console.log("50000");
}
else {
    console.log("0");
}