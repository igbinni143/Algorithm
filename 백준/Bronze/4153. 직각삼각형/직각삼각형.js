const fs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < fs.length; i++) {
	const [a, b, c] = fs[i].split(" ").map((v) => Number(v));

	if ((a, b, c == 0)) {
		break;
	} else if (a * a + b * b == c * c) {
		console.log("right");
	} else if (b * b + c * c == a * a) {
		console.log("right");
	} else if (a * a + c * c == b * b) {
		console.log("right");
	} else {
		console.log("wrong");
	}
}
