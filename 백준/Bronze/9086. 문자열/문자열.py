N = int(input())
for i in range (N):
  word = input()
  newword="".join((word[0],word[-1]))
  print(newword)