const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

m = Number(input);

if (m >=12 || m<=2) {
    console.log("Winter");
}
else if (m <= 5) {
    console.log("Spring");
}
else if (m <= 8) {
    console.log("Summer");
}
else if (m=<11) {
    console.log("Fall");
}