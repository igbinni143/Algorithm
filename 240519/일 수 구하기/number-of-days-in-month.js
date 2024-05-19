const fs = require ("fs");
let input = Number(fs.readFileSync(0).toString());


if (input ==2) {
    console.log("28");
}
else if (input <= 7 && input % 2 ==1) {
    console.log("31");
} 
else if (input <= 7 && input %2==0) {
    console.log("30");
}
else if (input <= 12 && input % 2 ==0) {
    console.log("31");
} 
else {
    console.log("30");
}