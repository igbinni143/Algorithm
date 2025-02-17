const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if ( (a%2==1 && a%3==0) || (a%2==0 && a%5==0) ) {
    console.log('true');
}
else {
    console.log('false');
}