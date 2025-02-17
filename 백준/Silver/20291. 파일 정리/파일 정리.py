N = int(input())
exten_list=[]
exten_dict={}

for i in range (N):
  f_Name,exten_Name = input().split(".")
  exten_list.append(exten_Name)


  if exten_Name in exten_dict :
    exten_dict[exten_Name] +=1
  else:
    exten_dict[exten_Name]=1

sorted_exten_dict = dict(sorted(exten_dict.items()))

for key, value in sorted_exten_dict.items():
  print(key,value)