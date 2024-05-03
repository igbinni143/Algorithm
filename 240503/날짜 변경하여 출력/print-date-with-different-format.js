const fs = require("fs");
let input = fs.readFileSync(0).toString();
date=input.split(".");

yy=date[0];
mm=date[1];
dd=date[2];

console.log(`${mm}-${dd}-${yy}`);