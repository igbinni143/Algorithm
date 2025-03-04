N = int(input())

persondict=[]

for i in range (N):
  age,name = input().split()
  age = int(age)
  persondict.append((age,name))

persondict.sort(key=lambda x:x[0])

for age,name in (persondict):
  print(age, name)