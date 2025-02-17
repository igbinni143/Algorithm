const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

ScoreA = input[0].split(' ');
//console.log(ScoreA) //['100', '85]
Ma = Number(ScoreA[0])
Ea = Number(ScoreA[1])

ScoreB = input[1].split(' ');

Mb = Number(ScoreB[0])
Eb = Number(ScoreB[1])




if (Ma > Mb  && Ea > Eb) {
    console.log("1")
}


else {
    console.log("0");
}