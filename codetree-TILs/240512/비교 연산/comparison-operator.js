// 입력 및 변수 선언
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" "); //여기서 아예 split 처리하는것도 tip

let a = Number(input[0]);
let b = Number(input[1]);


if (a >= b) {
    console.log("1");
} 
else {
    console.log("0");
}
//
if (a > b) {
    console.log("1");
} 
else {
    console.log("0");
}
//
if (a <= b) {
    console.log("1");
} 
else {
    console.log("0");
}
//
if (a < b) {
    console.log("1");
} 
else {
    console.log("0");
}

if (a = b) {
    console.log("1");
} 
else {
    console.log("0");
}

if (a != b) {
    console.log("1");
} 
else {
    console.log("0");
}