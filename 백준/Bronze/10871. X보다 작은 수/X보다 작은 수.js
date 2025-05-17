const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = fs[1].split(" ").map((v) => Number(v));
let num = fs[0].split(" ");
let b = Number(num[1]);

const ans = arr.filter((v) => b > v);

//console.log(ans);

let arr2 = "";
for (let i = 0; i < ans.length; i++) {
	arr2 += ans[i] + " ";
}
console.log(arr2);
