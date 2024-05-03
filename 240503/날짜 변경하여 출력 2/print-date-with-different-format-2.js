const fs = (require("fs"));
let input = fs.readFileSync(0).toString();
datels =input.split("-")
mm=datels[0];
dd=datels[1];
yy=datels[2];

console.log(yy+"."+mm+"."+dd);