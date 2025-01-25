N,M = map(int,input().split())

count=1
student_list2=[]

for i in range (N):
  T = int(input())
  student_list= input().split()
  student_list2.extend(student_list)

real_studentlist =[]
studentdict={}

for student in student_list2:
  if student in studentdict:
    studentdict[student]+=1
  
  else:
    studentdict[student]=1
  
M_student=[]
for student, count in studentdict.items():
  if count >= M:
    M_student.append(student)

if len(M_student) == 0:
  print(0)
else:
  print(len(M_student))