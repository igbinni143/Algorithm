# def solution(arr):
#     i=0
#     while i < len(arr)-1:
#         if arr[i] == arr[i+1] :
#             del(arr[i+1])    
#         else:
#             i+=1

#     return arr

# arr = [1,1,3,3,0,1,1]

# solution(arr)

        
def solution(arr):
    result = [arr[0]]  

    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1]:  # 이전 요소와 같지 않은 경우만 추가
            result.append(arr[i])

    return result

arr = [1, 1, 3, 3, 0, 1, 1]
print(solution(arr))