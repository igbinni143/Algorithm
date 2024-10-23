a,b = input().split()
a = int(a)
b = int(b)



if b > a:
    for i in range (b, a-1, -1):
        print(i, end=" ");

elif a>b:
    for i in range (a, b-1. -1):
        print(i, end=" ");

else:
    print(a)