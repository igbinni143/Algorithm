N = int(input()) 

cup =[1,2,3]

for i in range(N): 
  if N == 0:
    print( "-1")
    break;

  else:
    a,b = map(int,input().split())
    t = (cup.index(a))
    z = (cup.index(b))

    cup[t],cup[z] = cup[z],cup[t]
    
print(cup[0])