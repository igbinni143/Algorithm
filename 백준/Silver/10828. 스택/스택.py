import sys
input = sys.stdin.readline  

stack = []
def push(x):
    stack.append(x)
    
def pop():
    if len(stack) > 0:
        return stack.pop()
    return -1

def size():
    return len(stack)

def empty():
    return 1 if len(stack) == 0 else 0

def top():
    if len(stack) > 0:
        return stack[-1]
    return -1

n = int(input())

for _ in range(n):
    command = input().split()
    
    if command[0] == 'push':
        push(int(command[1]))
    elif command[0] == 'pop':
        print(pop())
    elif command[0] == 'size':
        print(size())
    elif command[0] == 'empty':
        print(empty())
    elif command[0] == 'top':
        print(top())