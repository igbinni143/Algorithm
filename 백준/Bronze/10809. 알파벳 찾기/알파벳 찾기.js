const fs = require("fs").readFileSync("/dev/stdin").toString().split("");

let empt = Array.from({ length: 26 }, () => -1);

let charcodArr = [];
for (let i = 0; i < fs.length; i++) {
	let c = fs[i].charCodeAt() - 97;
	charcodArr.push(c);
}

for (let i = 0; i < charcodArr.length; i++) {
	if (empt[charcodArr[i]] === -1) {
		empt[charcodArr[i]] = i;
		//console.log(empt[charcodArr[i]]);
	}
}
console.log(empt.join(" "));
