total_hlist = []
total = 0
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
      
      over_height.append(total_hlist[i])
      over_height.append(total_hlist[j])
      found=True
      break;
  if found==True:
    break

for i in range (len(over_height)):
  if over_height[i] in total_hlist:
    total_hlist.remove(over_height[i])
  total_hlist.sort()

for i in range (len(total_hlist)):
  print(total_hlist[i])
