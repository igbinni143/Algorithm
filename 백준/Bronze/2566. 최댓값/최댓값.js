const fs = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

max_list = Array();
max_infolist = Array();
for (let i = 0; i < 9; i++) {
	let row = fs[i].split(" ").map((v) => Number(v));
	//console.log(row[0]);
	let max = -1;
	let max_index = 0;

	for (let j = 0; j < 9; j++) {
		if (row[j] > max) {
			max = row[j];
			max_index = j;
			//console.log(`max: ${max}`);
		}
	}
	let max_info = [max, max_index];
	max_list.push(max_info);
}

//console.log(max_list); //각 줄 마다의 최댓값
let finalmax = -1;
let finalindex1 = 0;
let finalindex2 = 0;
for (let i = 0; i < max_list.length; i++) {
	if (finalmax < max_list[i][0]) {
		finalmax = max_list[i][0];
		finalindex1 = i;
		finalindex2 = max_list[i][1];
	}
}

console.log(finalmax);
console.log(finalindex1 + 1, finalindex2 + 1);
