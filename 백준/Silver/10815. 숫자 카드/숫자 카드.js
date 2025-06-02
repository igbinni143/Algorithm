const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const a1 = input[1].split(" ").map((v) => +v);
const a2 = input[3].split(" ").map((v) => +v);

const set = new Set();
for (let i = 0; i < a1.length; ++i) {
	set.add(a1[i]);
}
let ans = "";
for (let i = 0; i < a2.length; ++i) {
	if (set.has(a2[i])) {
		ans += "1 ";
	} else {
		ans += "0 ";
	}
}
console.log(ans);