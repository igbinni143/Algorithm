N = int (input())
inform=[]
for i in range (N):
  name,day,month,year = input().split()
  day,month,year = int(day),int(month),int(year)
  if 0 < day <10:
    day = f"0{day}"
  if 0 < month <10:
    month = f"0{month}"
  if 0 < year <10:
    year = f"0{year}"
  day,month,year = str(day),str(month),str(year)
  birth = year+month+day 
  birth = int(birth)
  inform.append((birth,name))

inform.sort(key=lambda x:x[0])

sortlist=[]
for birth,name in (inform):
  #print(name)
  sortlist.append(name)

print(sortlist[-1])
print(sortlist[0])
