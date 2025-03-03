heightlist=[]
total = 0
for i in range (9):
  height=int(input())
  heightlist.append(height)
  total+= height

heightlist.sort()
more = total - 100

found = False 

while found is False:
  for i in range (len(heightlist)):
    for j in range (1, len(heightlist)):
      if heightlist[i] + heightlist[j] == more:
        strange1,strange2 = heightlist[i] , heightlist[j]
        heightlist.remove(strange1)
        heightlist.remove(strange2)
        found = True
        break
    if found==True:
      break

for i in range (len(heightlist)):
  print(heightlist[i])