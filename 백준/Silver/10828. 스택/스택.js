const fs = require('fs');
const insput = fs.readFileSync(0).toString().trim().split('\n');
const [lines, ...cmds] = insput;

let newList = [];
for (let i = 0; i < cmds.length; i++) {
	let [cmd, num] = cmds[i].split(' ');
	//console.log(cmd, num);
	if (cmd == 'push') {
		newList.push(num);
	} else if (cmd == 'pop') {
		if (newList.length != 0) {
			console.log(newList[newList.length - 1]);
			newList.pop();
		} else {
			console.log(-1);
		}
	} else if (cmd == 'size') {
		console.log(newList.length);
	} else if (cmd == 'empty') {
		if (newList.length == 0) {
			console.log(1);
		} else {
			console.log(0);
		}
	} else if (cmd == 'top') {
		if (newList.length == 0) {
			console.log(-1);
		} else {
			console.log(newList[newList.length - 1]);
		}
	}
	//console.log(newList);
}
