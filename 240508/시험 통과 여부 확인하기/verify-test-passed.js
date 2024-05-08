const fs = require ("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if (a>=87) {
  console.log("pass");
}
else {
  b = 80-a
  console.log("{b} more score")
}