numlist=[]
numdict={}
cnt=1
for i in range (9):
  num = int(input())
  numlist.append(num)

numlist2= sorted(numlist)
maxnum = numlist2[-1]
for i in range(len(numlist)):
  if numlist[i] != maxnum:
    cnt+=1

  else:
    print(numlist[i])
    print(cnt)
    break
