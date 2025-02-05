n = int(input())

tri=[]
newtotal=[]

for i in range(1,100):
  t = i *(i+1)/2
  tri.append(int(t))

for j in range(n):
  answer=0
  p = int(input())
  for x in range (len(tri)):
    for y in range (len(tri)):
      for z in range (len(tri)):
        total = tri[x]+tri[y]+tri[z]
        if total == p :
          answer= 1
          break;
      if answer:
        break;
    if answer:
      break;
  print(answer)