function solution(dot) {
    var answer = 0;
    const [a,b] =dot

    if (a>0) {
        if(b>0) {
            answer =1
        }
        else{
            answer=4
        }
    }
    else{
         if(b>0){
            answer=2
            }
         else{
             answer=3
         }
    }
    return answer;
}