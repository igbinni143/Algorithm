const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = fs[0].split(" ").map(Number);

// N개의 행에 대해 반복
for (let i = 0; i < N; i++) {
	const row1 = fs[1 + i].split(" ").map(Number);
	const row2 = fs[1 + N + i].split(" ").map(Number);

	const result = row1.map((v, idx) => v + row2[idx]);
	console.log(result.join(" "));
}