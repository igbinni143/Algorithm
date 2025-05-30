const [a, b] = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let newa = "";
let newb = "";
for (let i = 2; i >= 0; i--) {
	newa += a[i];
	newb += b[i];
}

if (Number(newa) > Number(newb)) {
	console.log(newa);
} else {
	console.log(newb);
}