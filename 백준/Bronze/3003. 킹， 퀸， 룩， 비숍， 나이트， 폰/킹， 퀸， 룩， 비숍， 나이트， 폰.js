const [king, q, r, b, k, p] = require("fs")
	.readFileSync("dev/stdin")
	.toString()
	.split(" ");

console.log(1 - king, 1 - q, 2 - r, 2 - b, 2 - k, 8 - p);
