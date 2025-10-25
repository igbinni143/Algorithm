function solution(my_string, s, e) {
    var answer = '';
    let reverseString = my_string.slice(s,e)
    let newrString = ''
    if (s!==e) {
        let endString = my_string.slice(e+1,my_string.length)
        let startString = my_string.slice(0,s)
  
        for (let i =e; i>=s; --i){
        newrString += my_string[i]
        }  
 startString += newrString
    startString += endString
    answer = (startString)
    }
else {
   answer = my_string
}
   
    return answer;
}