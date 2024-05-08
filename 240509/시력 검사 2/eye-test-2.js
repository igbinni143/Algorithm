const fs = require ("fs")
let input = fs.readFileSync(0).toString();
input = Number(input)

if (input>=1.0) {
    console.log("High");
}
else if (input>= 0.5 ) {
    console.log("Middle");
}
else {
    console.log("Low");
}