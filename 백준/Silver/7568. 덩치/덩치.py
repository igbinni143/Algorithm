N = int(input())
personlist=[]
for i in range (N):
  weight,height = map(int,(input().split()))
  person = (weight,height)
  personlist.append(person)

ranklist=[]

for i in range ((len(personlist))) :
  rank=1
  for j in range (len(personlist)):
    if  i!=j:
      if personlist[i][0] < personlist[j][0] and personlist[i][1] < personlist[j][1]:
        rank+=1
  ranklist.append(rank)

print(*ranklist)