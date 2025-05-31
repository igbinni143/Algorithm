const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
let cnt = 0;
for (let i = 0; i < fs.length; i++) {
	if (fs[i] != "") {
		if (fs[i] == "c") {
			if (fs[i + 1] == "=") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			} else if (fs[i + 1] == "-") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		} else if (fs[i] == "d") {
			if (fs[i + 1] == "z") {
				if (fs[i + 2] == "=") {
					fs[i] = "";
					fs[i + 1] = "";
					fs[i + 2] = "";
					cnt += 1;
				}
			} else if (fs[i + 1] == "-") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		} else if (fs[i] == "l") {
			if (fs[i + 1] == "j") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		} else if (fs[i] == "n") {
			if (fs[i + 1] == "j") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		} else if (fs[i] == "s") {
			if (fs[i + 1] == "=") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		} else if (fs[i] == "z") {
			if (fs[i + 1] == "=") {
				fs[i] = "";
				fs[i + 1] = "";
				cnt += 1;
			}
		}
	}
}

let newfs = fs.filter((v) => v != "");
cnt += newfs.length;
console.log(cnt);