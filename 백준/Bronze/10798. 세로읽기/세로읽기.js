const rows = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const base = Array.from({ length: 15 }, () =>
	Array.from({ length: 15 }, () => -1)
);

for (let i = 0; i < rows.length; i++) {
	for (let j = 0; j < rows[i].length; j++) {
		base[i][j] = rows[i][j];
	}
}

let ans = "";
for (let j = 0; j < 15; ++j) {
	for (let i = 0; i < 15; ++i) {
		if (base[i][j] != -1) {
			ans += base[i][j];
		}
	}
}
console.log(ans);
