str = input()

str = list(str)
newstr=[]

for i in range(len(str)):
    # print(str[i])
    if str[i].islower() == True:
        str[i] = str[i].upper()
    else:
       str[i]= str[i].lower()
    newstr.append(str[i])
    
print("".join(newstr))