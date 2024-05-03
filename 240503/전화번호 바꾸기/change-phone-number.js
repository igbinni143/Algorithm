const fs = require("fs");
let input = fs.readFileSync(0).toString();
nums = input.split('-');
p0=nums[0];
p1=nums[1];
p2=nums[2];

console.log(`${p0}-${p2}-${p1}`);