const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

reye = Number(input[0]);
leye = Number(input[1]);

if (reye >= 1.0 && leye >= 1.0) {
    console.log("High");
}

else if (reye >= 0.5 && leye >= 0.5){
    console.log("Middle");
}
else {
    console.log("Low")
}