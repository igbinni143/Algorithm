def solution(arr, queries):
    results = []  

    for query in queries:
        a, b, c = query
        new_arr = arr[a:b+1]  
        result = [] 
        
        for num in new_arr:
            if num > c:
                result.append(num)  

        if result:
            results.append(min(result))
        else:
            results.append(-1)

    return results  

print(solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]))