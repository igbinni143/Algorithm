const fs = require("fs")
	.readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n");
let N = Number(fs[0].split(" ")[0]);
let M = Number(fs[0].split(" ")[1]);

const newArray = Array.from({ length: N }, (v, i) => i + 1);

for (let i = 1; i <= M; i++) {
	let k = Number(fs[i].split(" ")[0]);
	let j = Number(fs[i].split(" ")[1]);

	let sliceArray = newArray.slice(k - 1, j);
	let reversed = sliceArray.reverse();
	newArray.splice(k - 1, j - k + 1, ...reversed);
}

console.log(newArray.join(" "));