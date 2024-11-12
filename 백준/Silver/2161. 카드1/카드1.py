a = int(input())

arr=[]

for i in range(1,a+1):
    arr.append(i)


for j in range(a+1):
    if len(arr) > 1:
        print(arr[0],end=" ")
        del arr[0]

        arr.append(arr[0])
        del(arr[0])


    else:
        break

print(*arr)