a = []
for _ in range(5):
    a.append(input())

lena=[]
for i in range(len(a)):
    lena.append(len(a[i]))

for j in range(max(lena)):
    for i in range(len(a)):
        if j < len(a[i]):
            print(a[i][j],end="")