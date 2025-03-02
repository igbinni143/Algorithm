total = 0 
totalgrade = 0
subjectcnt = 20
for i in range (20):
  subject,grade,score = input().split()
  grade = float(grade)

  if score == "P":
    continue

  if score == "A+":
    score = 4.5
  elif score == "A0":
    score = 4.0
  elif score == "B+":
    score = 3.5
  elif score == "B0":
    score = 3.0
  elif score == "C+":
    score = 2.5
  elif score == "C0":
    score = 2.0
  elif score == "D+":
    score = 1.5
  elif score == "D0":
    score = 1.0

  elif score == "F":
    score = 0
    subjectcnt-=1
  
  total += (grade*score)
  totalgrade += grade

if totalgrade == 0:
  print("0.000000")
else:
  p=(total/totalgrade)
  print(f'{p:.6f}')
