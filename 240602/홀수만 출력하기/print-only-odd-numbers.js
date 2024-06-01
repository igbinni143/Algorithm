const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i<=n; i++) {
    if (n[i] % 2 ===1){
        if (n[i]%3 ===0) {
            console.log(n[i])
        }
    } 
}