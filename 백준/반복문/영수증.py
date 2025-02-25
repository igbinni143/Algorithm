total = int(input())
N = int(input())
total2=0
for i in range (N):
  price,count=map(int,input().split())
  total2 += price*count

if total2 == total :
  print("Yes")
else:
  print("No")