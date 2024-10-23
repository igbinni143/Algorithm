way,num=input().split()

num = int(num)
if way =="A" :
    for i in range (1,num+1):
        print(i,end=" ")
        i+=1
elif way == "D":
    i = num
    for i in range(1,num+1):
        print(i,end=" ")
        i-=1
        if i==0:
            break