const fs = require("fs").readFileSync("dev/stdin").toString().split("\n");
let def = fs[0].split(" ");
let N = Number(def[0]);

const Arr = Array.from({ length: N }, (v, i) => i + 1);
//console.log(Arr);

let input = fs.slice(1);

for (let i = 0; i < input.length; i++) {
	let input2 = input[i].split(" ");
	let A = Number(input2[0]);
	let B = Number(input2[1]);
	let C = Arr[A - 1];
	let D = Arr[B - 1];
	Arr[A - 1] = D;
	Arr[B - 1] = C;
}
//console.log(Arr);

const ans = Arr.map((v) => {
	return v;
});

console.log(ans.join(" "));
