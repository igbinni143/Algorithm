const fs = require("fs");
let input = fs.readFileSync(0).toString();

students = input.split("\n");
sa = students[0];

a = sa.split(" ");
amath = Number(a[0]);
aenglish = Number(a[1]);

sb = students[1];
b = sb.split(" ");
bmath = Number(b[0]);
benglish = Number(b[1]);

//console.log(amath,aenglish,bmath,benglish);

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
    else if (aenglish < benglish){
        console.log("B");
    }
}