students=[]
for student in range (1,31):
  students.append(student)


for i in range (28) :
  a = int(input())
  students.remove(a)

for i in range (len(students)):
  print(students[i])