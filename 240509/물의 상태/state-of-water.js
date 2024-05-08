const fs = require("fs")
let input = fs.readFileSync(0).toString();

temp = Number(input);

if (temp<0) {
    console.log("ice");
}
else if (temp>=100) {
    console.log("vapor");
}

else {
    console.log("water");
}