total_hlist = []
total = 0
import sys

for _ in range(9):
  indiv_height = int(input())
  total_hlist.append(indiv_height)
  total+=indiv_height

over = (total-100)

i=0
over_height=[]
found=False
for i in range (len(total_hlist)):
  for j in range(i+1,len(total_hlist)):
    if total_hlist[i] + total_hlist[j] == over:
      h1, h2 = total_hlist[i] , total_hlist[j] 
      total_hlist.remove(h1)
      total_hlist.remove(h2)
      found=True
      break;
  if found==True:
    break

total_hlist.sort()

for i in range (len(total_hlist)):
  print(total_hlist[i])