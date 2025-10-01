function solution(a,b,c){
    const A = Number(a), B = Number(b),  C = Number(c)
    let answer = 0
    if (A==B && A==B && B==C ) {
        answer = (A + B + C ) * (A*A + B*B + C*C ) * (A*A*A + B*B*B + C*C*C )
    }
    else if (A==B || B == C || C==A) {
          answer = (A + B + C ) * (A*A + B*B + C*C ) 
    }
    else {
          answer = (A + B + C )
    }
    return answer
}