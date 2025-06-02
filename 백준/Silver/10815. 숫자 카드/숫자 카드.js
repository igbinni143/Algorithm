const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const a1 = input[1].split(" ").map((v) => +v);
const a2 = input[3].split(" ").map((v) => +v);

const dic = {};
for (let i = 0; i < a1.length; ++i) {
	dic[a1[i]] = 1;
}
let ans = "";
for (let i = 0; i < a2.length; ++i) {
	if (dic[a2[i]] === undefined) {
		dic[a2[i]] = 0;
	}
	ans += dic[a2[i]] + " ";
}
console.log(ans);