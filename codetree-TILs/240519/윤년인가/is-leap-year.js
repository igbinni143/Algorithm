const fs = require ("fs");
let input = Number(fs.readFileSync(0).toString());


if (input % 100 == 0 && input % 400 != 0) {
    console.log("false");
}
else if (input % 4 == 0) {
    console.log("true");
} 

else {
    console.log(false);
}