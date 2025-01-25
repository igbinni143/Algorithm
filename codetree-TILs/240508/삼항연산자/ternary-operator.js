const fs = require("fs")
let input = fs.readFileSync(0).toString();

a=Number(input)

let b = a == 100 ? console.log("pass"):console.log("failure");