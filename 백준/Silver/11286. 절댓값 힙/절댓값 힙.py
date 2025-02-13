import heapq 
import sys
N = int(input())

hq=[]

for i in range (N):
  new_num = int(sys.stdin.readline())
  if new_num>0:
    num_tuple = (new_num,new_num)
    heapq.heappush(hq,num_tuple)
  elif new_num <0:
    num_tuple = (-new_num,new_num)
    heapq.heappush(hq,num_tuple)
  else: 
    if len(hq)>0:
      print(hq[0][1])
      heapq.heappop(hq)
    else:
      print(0)