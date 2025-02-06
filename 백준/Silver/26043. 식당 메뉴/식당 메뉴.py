from collections import deque  # deque 사용으로 시간복잡도 개선
import sys
N = int(input())
waitinglist = deque()  # 리스트 대신 deque 사용
listA = []
listB = []

for i in range (N):
  input_string = list(map(int, sys.stdin.readline().split()))
  if (input_string[0]) == 1:
    studentNum, studentMenuNum = input_string[1],input_string[2]
    studentorder = (studentNum,studentMenuNum)
    waitinglist.append(studentorder)

  elif (input_string[0]) == 2:
    MenuNum = input_string[1]
    if waitinglist[0][1] == MenuNum:
      listA.append(waitinglist[0][0])
    else:
      listB.append(waitinglist[0][0])
    waitinglist.popleft()  # del 대신 popleft() 사용 - O(1)

listA.sort()
listB.sort()

if not listA:
    print("None")
else:
    print(*listA)

if not listB:
    print("None")
else:
    print(*listB)

if len(waitinglist) == 0:
    print("None")
else:
    waiting_students = sorted([student[0] for student in waitinglist])
    for student in waiting_students:
        print(student, end=" ")