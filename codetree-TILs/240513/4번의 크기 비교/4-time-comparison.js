const fs = require("fs");

// 입력 받기
let input = fs.readFileSync(0, "utf-8").trim().split("\n");
const a = parseInt(input[0]); // a의 값
const numbers = input[1].split(" ").map(Number); // b, c, d, e의 값 배열로 변환

// a와 b, c, d, e 각각 비교하여 결과 출력
for (let i = 0; i < numbers.length; i++) {
    console.log(a > numbers[i] ? 1 : 0);
}