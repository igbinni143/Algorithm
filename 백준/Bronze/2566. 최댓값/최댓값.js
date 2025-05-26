const arr = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((v) => v.split(" ").map((v) => Number(v)));

let max = -1;
let x = -1;
let y = -1;
for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		if (max < arr[i][j]) {
			max = arr[i][j];
			x = j + 1;
			y = i + 1;
		}
	}
}
console.log(max);
console.log(y, x);