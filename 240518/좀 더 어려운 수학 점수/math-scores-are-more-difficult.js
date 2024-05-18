const fs = require("fs");
let input = fs.readFileSync(0).toString();

students = input.split("\n");
sa = students[0];
a = sa.split(" ");
amath = Number(sa[0]);
aenglish = Number(sa[1]);
sb = students[1];
b = sb.split(" ");
bmath = Number(sb[0]);
benglish = Number(sb[1]);

if (amath > bmath) {
    console.log("A");
}
else if (amath < bmath) {
    console.log("B");
}
else if (amath == bmath){
    if (aenglish > benglish) {
        console.log("A");
    }
    else {
        console.log("B");
    }
}