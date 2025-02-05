import sys 
N = int(input())

queue =[]
for i in range (N):
    args = sys.stdin.readline().split() 
    if "push" in args:
        queue.append(args[1])
    if "pop" in args:
        if len(queue) ==0:
            print("-1")
        else:
            print(queue[0])
            del(queue[0])
    if "size" in args:
        print(len(queue))
    if "empty" in args:
        if len(queue)==0:
            print("1")
        else:
            print("0")
    if "front" in args:
        if len(queue)==0:
            print("-1")
        else:
            print(queue[0])
    if "back" in args:
        if len(queue)==0:
            print("-1")
        else:
            print(queue[-1])