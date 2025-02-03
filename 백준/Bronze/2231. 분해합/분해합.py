n = int(input())

def solve():
    for i in range(1, n):  
        cnt = i
        digit_sum = 0
        
        while cnt > 0:
            digit_sum += cnt % 10 
            cnt //= 10  

        if i + digit_sum == n: 
            print(i)
            return
    print(0)  

solve()