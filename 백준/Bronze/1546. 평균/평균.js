const fs = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
N = Number(fs[0]);
scorelist = fs[1].split(" ").map(Number);

const MaxScore = Math.max(...scorelist);
let sumscore = 0;

for (let i = 0; i < scorelist.length; i++) {
	scorelist[i] = (scorelist[i] / MaxScore) * 100;
	sumscore += scorelist[i];
}

let average = sumscore / scorelist.length;

if (Number.isInteger(average)) {
	console.log(average.toFixed(1));
} else if (average.toString().split(".")[1].length > 7) {
	console.log(Number(average).toFixed(6));
} else {
	console.log(average);
}
