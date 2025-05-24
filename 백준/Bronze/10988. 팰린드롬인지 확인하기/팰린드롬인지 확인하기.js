const fs = require("fs").readFileSync("dev/stdin").toString().trim();

let i = 0;
let j = fs.length - 1;
let f = true;

while (i < j) {
	if (fs[i] != fs[j]) {
		f = false;
		break;
	}
	i++;
	j--;
}
if (f == true) {
	console.log(1);
} else {
	console.log(0);
}
