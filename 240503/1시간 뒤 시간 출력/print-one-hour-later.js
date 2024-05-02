const fs = require("fs");
let s = fs.readFileSync(0).toString().trim();

hm = s.split(":");
h = Number(hm[0]);
m = Number(hm[1]);
console.log(h+1,":",m);