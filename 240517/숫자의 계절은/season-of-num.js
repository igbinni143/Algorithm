const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());

if (a >=3 && a<=5) {
    console.log("Spring");
}
else if (a >=6 && a<=8) {
    console.log("Summer");
}
else if (a >= 9 && a<= 11) {
    console.log("Fall");
}
else if (a<=2 && a ==12 ) {
    console.log("Winter");
}