const fs = require("fs");
let input = fs.readFileSync(0).toString();

a = input.split('\n');
gender = Number(a[0]); //0=Man 1=Woman
age = Number(a[1]);

if (gender == 0) {
    if (age >= 19) {
        console.log("MAN");
    }
    else {
        console.log("BOY");
    }
}

else if (gender ==1) {
    if (age >= 19) {
        console.log("WOMAN");
    }
    else {
        console.log("GIRL");
    }
}