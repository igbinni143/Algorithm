const fs = require("fs");
let input = fs.readFileSync(0).toString();
data=input.split(".");
year=data[0];
month=data[1];
date=data[2];

console.log(`${date}-${month}-${year}`);