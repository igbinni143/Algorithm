const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

m = Number(input);

if (m >=3 && m<=5) {
    console.log("Spring");
}
else if (m >=6 && m<=8) {
    console.log("Summer");
}
else if (m >= 9 && m<= 11) {
    console.log("Fall");
}
else if (m==12 && m <=2 ) {
    console.log("Winter");
}