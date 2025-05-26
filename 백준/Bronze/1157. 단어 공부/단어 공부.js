const input = require("fs").readFileSync("/dev/stdin").toString();
const cnt = Array.from({ length: 26 }, () => 0);
let c = 0;
for (let i = 0; i < input.length; i++) {
	c = input[i].charCodeAt(0);
	if (c >= 97) {
		c = c - 32;
	}
	cnt[c - 65] += 1;
}

let maxc = 0; //젤 많이 나온 알파벳의 번호
for (let i = 0; i < 26; i++) {
	if (cnt[maxc] < cnt[i]) {
		maxc = i;
	}
}

let flag = true;
for (let i = 0; i < 26; i++) {
	if (cnt[maxc] == cnt[i] && i !== maxc) {
		flag = false;
		break;
	}
}

if (flag) {
	console.log(String.fromCharCode(maxc + 65));
} else {
	console.log("?");
}
