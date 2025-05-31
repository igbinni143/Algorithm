const fs = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
if (fs % 4 == 0 && (fs % 100 != 0 || fs % 400 == 0)) {
	console.log(1);
}
else{console.log(0);}