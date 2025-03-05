N = int(input())
worddict={}

for i in range(N):
  word = input()
  wordlength = len(word)

  if wordlength not in worddict:
    worddict[wordlength]=set()

  worddict[wordlength].add(word)

wordlist=[]
for length in sorted(worddict.keys()):
  wordlist.extend(sorted(worddict[length]))

#print(wordlist)

for word in wordlist:
  print(word)
