const fs = require('fs');
let [numb, ...input] = fs.readFileSync(0).toString().trim().split('\n');
for (let i = 0; i < numb; i++) {
	input[i] = replace(input[i]);
	console.log(input[i]);
}

function replace(str) {
	if (str.includes('0!')) {
		return replace(str.replace('0!', '1'));
	} else if (str.includes('1!')) {
		return replace(str.replace('1!', '1'));
	} else if (str.includes('!0')) {
		return replace(str.replace('!0', '1'));
	} else if (str.includes('!1')) {
		return replace(str.replace('!1', '0'));
	}
	return str;
}
