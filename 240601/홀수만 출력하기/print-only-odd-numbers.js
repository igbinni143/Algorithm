const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let a = 0;
for (let i = 0; i<n.length; i++) {
    if (n[i] % 2 ===1 ) {
        if (n[i]%3 ===0) {
            console.log(n[i]);
        }
        else{
        a+=1;
        }
    }
    else {
     a+=1;   
    }
}