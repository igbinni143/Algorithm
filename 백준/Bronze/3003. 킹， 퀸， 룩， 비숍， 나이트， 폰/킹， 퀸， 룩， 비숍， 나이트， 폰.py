king,queen,luk,bishop,night,phone =map(int,input().split())

if king !=1:
  print(1-king, end=' ')
else:
  print(0,end=' ') 

if queen !=1:
  print(1-queen, end=' ')
else:
  print(0,end=' ') 

if luk !=2:
  print(2-luk, end=' ')
else:
  print(0,end=' ') 

if bishop !=2:
  print(2-bishop, end=' ')
else:
  print(0,end=' ') 
  
if night !=2:
  print(2-night, end=' ')
else:
  print(0,end=' ') 

if phone !=8:
  print(8-phone, end=' ')
else:
  print(0,end=' ') 
