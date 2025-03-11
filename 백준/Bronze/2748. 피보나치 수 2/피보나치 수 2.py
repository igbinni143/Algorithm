N = int(input())

fivo=[0,1]

for i in range (N):
    newfivo = fivo[i] + fivo[i+1]
    fivo.append(newfivo)

print(fivo[N])