const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let result = "";
let i = 1;
while (i<=n) {
    result += i + " "
    i +=1
}
console.log(result);