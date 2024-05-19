const fs = require ("fs");
let abc = fs.readFileSync(0).toString();

abc1 = abc.split(" ");
a= Number(abc1[0]);
b= Number(abc1[1]);
c= Number(abc1[2]);


if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c >a && c>b) {
    console.log(c)
}
else if (a==b) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(c)
    }
}
else if (b==c) {
    if (b > a) {
        console.log(b)
    }
    else {
        console.log(a)
    }
}
else if (a==c) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}