const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
a = Number(input[0]);
b = Number(input[1]);
c = a/b; 
let c2 = c.toString().trim();
let c3 = c2.split(".");
let c4 = c3[1];
let clength = c4.length;
let wlength = 21 - clength;


if (clength <21) {
    for (let i = 1; i<wlength; i++ ) {
    c2 += "0"
    c2 = c2.trim()
    }
}   
else if (clenth >=21){
    for (let i = 1; i<21; i++) {
       c2 += c4[i]
       c2 = c2.trim()
    }
}

console.log(c2);