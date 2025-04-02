const fs = require('fs');
f_split = fs.readFileSync(0).toString().split('\n');

for (let i = 0; i < f_split.length - 1; i++) {
	let cnt_upper = 0;
	let cnt_lower = 0;
	let cnt_blank = 0;
	let cnt_number = 0;

	for (let j = 0; j < f_split[i].length; j++) {
		const char = f_split[i][j];
		if (char >= 'A' && char <= 'Z') {
			cnt_upper += 1;
		} else if (char >= 'a' && char <= 'z') {
			cnt_lower += 1;
		} else if (char >= '0' && char <= '9') {
			cnt_number += 1;
		} else if (char === ' ') {
			cnt_blank += 1;
		}
	}
	console.log(cnt_lower, cnt_upper, cnt_number, cnt_blank);
}
