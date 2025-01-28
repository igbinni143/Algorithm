def solution(n):
    total=0
    if n % 2 ==1:
        i = n
        while i>=0:
            total += i
            i-=2
        return total
            
    else:
        i = n 
        while i >0 :
            total += i **2
            i-=2
        return total

    
    answer = 0
    return answer