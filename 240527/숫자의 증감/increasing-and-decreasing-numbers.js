const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

c = input[0];
n = Number(input[1]);
result=[];

if (c=='A') {
    for (let i = 1; i<=n; i++) {
        result += i + " ";
    }
}
else if (C=='D') {
    for (let i = n; i>0; i--){
        result += i + " ";
    }
};

console.log(result);