const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let www = ""

a = Number(input[0]);
b = Number(input[1]);

c = (a/b);
c2 = c.toString().trim();
c3 = c2.split(".");
c4 = c3[2]

clength = c4.length;
wlength = 21-clength;

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