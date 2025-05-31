const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
inputNum = Number(fs[0]);
let cnt = 0;

const Arr = Array.from({ length: 11 }, (v) => -1);
for (let i = 1; i <= inputNum; i++) {
	[a, b] = fs[i].split(" ");
	if (Arr[a] == -1) {
		Arr[a] = b;
	} else if (b == Arr[a]) {
		continue;
	} else {
		Arr[a] = b;
		cnt += 1;
	}
}

console.log(cnt);