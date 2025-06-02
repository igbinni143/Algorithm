const fs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let gn = Number(fs[0]);
let sn = Number(fs[2]);
let glist = fs[1]
	.split(" ")
	.map((v) => Number(v))
	.sort((a, b) => a - b);
let slist = fs[3].split(" ").map((v) => Number(v));

const BinarySearch = (start, end, target, arr) => {
	const mid = Math.floor((start + end) / 2);
	if (start > end) {
		return 0;
	}
	if (target > arr[mid]) {
		return BinarySearch(mid + 1, end, target, arr);
	} else if (target < arr[mid]) {
		return BinarySearch(start, mid - 1, target, arr);
	}
	return 1;
};

for (let i = 0; i < sn; i++) {
	let found = BinarySearch(0, gn - 1, slist[i], glist);
	console.log(found);
}
