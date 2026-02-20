function solution(emergency) {
    let emergency_ord = [...emergency]
    for (let i = 0; i <= emergency_ord.length; i++) {
        emergency_ord.sort((a, b) => (b - a))
    }
    var answer = [];
    for (let k = 0; k < emergency_ord.length; k++) {
        t = (emergency_ord.indexOf(emergency[k]))
        answer.push(t + 1)
    }
    return answer;
}


