way,num=input().split()

num = int(num)
if way =="A" :
    for i in range (1,num + 1):
        print(i,end=" ")
else:
    for i in range(num,0, -1):
        print(i,end=" ")