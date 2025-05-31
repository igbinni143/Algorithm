fs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
num = fs[0];

const apartment = Array.from({ length: 15 }, () =>
	Array.from({ length: 15 }, () => 0)
);

for (let i = 1; i <= 14; i++) {
	apartment[0][i] = i;
}

for (let i = 1; i <= 14; i++) {
	//층 순회
	for (let j = 1; j <= 14; j++) {
		// 호
		for (let k = 1; k <= j; k++) {
			apartment[i][j] += apartment[i - 1][k];
		}
	}
}

for (let i = 0; i < num * 2; i += 2) {
	let a = Number(fs[i + 1]);

	let b = Number(fs[i + 2]);
	console.log(apartment[a][b]);
}