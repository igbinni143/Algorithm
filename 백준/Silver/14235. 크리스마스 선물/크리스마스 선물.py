import sys
import heapq

n = int(input())

gift_list=[]

for i in range (n):
  args = list(map(int, sys.stdin.readline().split()))

  if args[0] == 0:
    if len(gift_list) == 0 :
        print(-1)
    else:
      print((gift_list[0][1]))
      (heapq.heappop(gift_list))

  else:
    for i in range (1, len(args)):
      heapq.heappush(gift_list,((-args[i]),args[i]))
