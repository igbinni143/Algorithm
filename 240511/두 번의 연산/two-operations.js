const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

if (input %2 ==1) {
    a = input +3
}

if (a%3==0) {
    a=a/3
}
console.log(a)