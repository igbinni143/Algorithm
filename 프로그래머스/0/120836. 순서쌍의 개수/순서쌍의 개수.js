function solution(n) {
    var answer = 0;
    let answerarray=[]
    for (let i=1; i<=n;i++){
        if (n%i==0){
            let a= i
            let b = parseInt(n/i)
            
            answerarray.push([a,b])
        }
    }
    console.log(answerarray)
    answer = answerarray.length
    return answer;
}