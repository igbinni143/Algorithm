const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");

let input = fs[0].split(" ");
let N = input[0];
let M = input[1];
//console.log(N, M);

let arr = Array.from({ length: N }, (v) => 0);

for (let i = 1; i <= M; i++) {
	const Rinput = fs[i];
	const a = Number(Rinput.split(" ")[0]);
	const b = Number(Rinput.split(" ")[1]);
	const c = Number(Rinput.split(" ")[2]);
	for (let i = a; i <= b; i++) {
		const Rinput = arr[i - 1];
		arr[i - 1] = c;
	}
}

console.log(arr.join(" "));
