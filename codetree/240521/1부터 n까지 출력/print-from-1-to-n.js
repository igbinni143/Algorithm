const fs= require ("fs");
let input = Number(fs.readFileSync(0).toString());

let result="";
for (i = 1; i<= input; i++) {
    result += i+(" ");
}

console.log(result);