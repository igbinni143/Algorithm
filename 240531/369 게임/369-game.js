const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let li =[];
for (let i= 1; i<=n; i++) {
    if (i%3===0){
        // console.log (0);
        li += "0 ";
    }
    else if (i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9')) {
        li += "0 ";
    }   
    else {
        // console.log (0);
        li += i+" ";
    }
}

console.log(li)