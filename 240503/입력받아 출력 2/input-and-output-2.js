const fs = require("fs")
let input = fs.readFileSync(0).toString();
jumin=input.split("-");
juminfront=jumin[0];
juminback=jumin[1];

console.log(`${juminfront}${juminback}`);