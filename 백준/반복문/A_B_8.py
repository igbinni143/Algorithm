N= int(input())

for i in range (N):
  a,b = map(int,input().split())
  total = a+b
  print(f"Case #{i+1}: {a} + {b} = {total}")