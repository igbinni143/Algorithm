const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

const arr = [];
for (let i = a; i <= b; i++) {
	arr.push(i);
}
const ans = new Set();

for (let i = a; i < b + 1; i++) {
	if (i === 1) {
		ans.add(i);
		continue;
	}
	for (let j = 2; j <= Math.sqrt(i); j++) {
		if (i % j === 0) {
			ans.add(i);
			break;
		}
	}
}

const answer = arr.filter((x) => !ans.has(x));

for (let i = 0; i < answer.length; i++) {
	console.log(answer[i]);
}
