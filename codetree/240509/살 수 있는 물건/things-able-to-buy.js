const fs = require ("fs")
let input = fs.readFileSync(0).toString();
n = Number(input);

if (n>=3000) {
    console.log("book");
}
else if (n>=1000) {
    console.log("mask");
}

else {
    console.log("no")
}