const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let cnt = 0;
let arr = fs[1].split(" ").map((v) => Number(v));

let a = Number(fs[0]);
let b = Number(fs[2]);

//console.log(typeof a);

const ans = arr.filter((v) => v == b).length;

console.log(ans);
