fs = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
let input = fs.map((v) => Number(v % 42));

let arr2 = {};
input.forEach((x) => {
	arr2[x] = (arr2[x] || 0) + 1;
});

console.log(Object.keys(arr2).length);
