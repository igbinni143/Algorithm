const fs = Number(require("fs").readFileSync("/dev/stdin").toString());

for (let i = 1; i <= fs; i++) {
	let newStr = "";
	for (let s = 1; s <= fs - i; s++) {
		newStr += " ";
	}

	for (let j = 1; j <= 2 * i - 1; j++) {
		newStr += "*";
	}
	console.log(newStr);
}
for (let i = fs - 1; i >= 1; i--) {
	let newStr = "";
	for (let s = 1; s <= fs - i; s++) {
		newStr += " ";
	}
	for (let j = 1; j <= 2 * i - 1; j++) {
		newStr += "*";
	}
	console.log(newStr);
}