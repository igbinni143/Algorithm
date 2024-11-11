def solution(num_list):
    result = [0] * len(num_list)

    for i in range(len(num_list)):
        while num_list[i] > 1:
            if num_list[i] % 2 == 0:
                num_list[i] //= 2 
                result[i] += 1 
            else:
                num_list[i] -= 1  

    print(result)
    
    total = sum(result)
    return total


num_list = [12, 4, 15, 1, 14]

solution(num_list)
        
    