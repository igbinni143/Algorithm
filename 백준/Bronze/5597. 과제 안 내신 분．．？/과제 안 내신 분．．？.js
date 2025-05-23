const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");
const Arr = fs.map((v) => Number(v));
const Thirty = Array.from({ length: 30 }, (v, i) => i + 1);

const ans = Thirty.filter((v) => !Arr.includes(v));

for (let i = 0; i < ans.length; i++) {
	if (ans[i] > ans[i + 1]) {
		let A = ans[i];
		let B = ans[i + 1];
		ans[i] = B;
		ans[i + 1] = A;
	}
}
for (let i = 0; i < ans.length; i++) {
	console.log(ans[i]);
}
