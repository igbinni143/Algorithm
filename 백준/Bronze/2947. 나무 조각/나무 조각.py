branches = list(map(int,input().split()))

def check(x):
  swapped=False
  for i in range (len (x)-1) :
    a = x[i]
    for j in range (i+1,i+2):
      b=x[j]
      if a > b :
        x[i] = b
        x[j] = a
        print(*x)
        swapped=True

  if swapped:
    check(x)

check(branches)