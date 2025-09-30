function solution(num_list) {

let l = num_list.length
lastNumb = (num_list[l-1])
    pre2Numb = (num_list[l-2])
if (lastNumb > pre2Numb){
    num_list.push(lastNumb-pre2Numb)
}
//     else if (lastNumb === pre2Numb){
// num_list.push(lastNumb*2)
        
//     }
    
    else {
        num_list.push(lastNumb*2)
}
    return num_list 
}