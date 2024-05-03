const fs = require("fs");
let input = fs.readDataSync(0).toString();
date = input.split(".")
year=data[0];
month=data[1];
date=data[2];

console.log(`${date}-${month}-${year}`);