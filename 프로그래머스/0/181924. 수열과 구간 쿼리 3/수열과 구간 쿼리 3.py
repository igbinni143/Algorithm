def solution(arr, queries):
    n_arr=[]
    n_arr =arr
    for i in range (len(queries)):
        # print(f"i, {i}")
        for j in range (len(queries[0])-1):
            # print(f"j, {j}")    
            b = (queries[i][j])
            c = (queries[i][j+1])
            a = n_arr[b]
            n_arr[b] = n_arr[c]
            n_arr[c] = a

    return(n_arr)
