const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
aa = input[0].split(" ");
bb = input[1].split(" ");
cc = input[2].split(" ");
let asymptom = aa[0];
let atemp = Number(aa[1]);
let bsymptom = bb[0];
let btemp = Number(bb[1]);
let csymptom = cc[0];
let ctemp = Number(cc[1]);
emer = 0;
nemer = 0;

if (asymptom == "Y") {
    if (atemp >= 37) {
        emer = emer + 1;
    }
    else {
    }
}

if (bsymptom == "Y") {
    if (btemp >= 37) {
        emer = emer + 1;
    }
    else {
    }
}

if (csymptom == "Y") {
    if (ctemp >= 37) {
        emer = emer + 1;
    }
    else {
    }
}

if (emer >=2) {
    console.log("E");
}
else {
    console.log("N");
}