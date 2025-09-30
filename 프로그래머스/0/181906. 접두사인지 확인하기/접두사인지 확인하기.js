function solution(my_string, is_prefix) {
    let lp = is_prefix.length
    let answer = ''

    for (i=0; i<lp ; ++i){
       answer +=  my_string[i]
    }
    
    if (answer === is_prefix){
        return (1)
    }
    else{
        return (0)
    }
}