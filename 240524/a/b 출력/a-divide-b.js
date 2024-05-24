const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let c = a/b; 
let c2 = c.toString().trim();
let c3 = c2.split(".");
let c4 = c3[1];
let clength = c4.length;
let wlength = 21 - clength;

a = Number(input[0]);
b = Number(input[1]);

if (clength <21) {
    for (let i = 0; i<=wlength; i++ ) {
    c2 += "0"
    }
}   
else if (clenth >=21){
    for (let i = 0; i<=21; i++) {
       c2 += c4[i]
       c2 = c2.trim()
    }
}

console.log(c2);