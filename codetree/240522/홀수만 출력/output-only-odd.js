const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

a = Number(input[0]);
b = Number(input[1]);
//console.log(a,b);
let result = "";


if (a%2 ==1){
    for (i=a; i<= b; i+=2) {
        result += i + " ";
       // console.log(result);
    }
}

else if (a%2 ==0 ){
    for (i= a+1; i <= b; i+=2) {
        result += i + " ";
}
}

console.log(result);