alphadict = {"a":"1","b":"2","c":"3","d":"4","e":"5","f":"6","g":"7","h":"8","i":"9","j":"10","k":"11","l":"12","m":"13","n":"14","o":"15","p":"16","q":"17","r":"18","s":"19","t":"20","u":"21","v":"22","w":"23","x":"24","y":"25","z":"26"}

N = int(input())
valuelist=[]
newvalue=""
total = 0
f_total =0
inputstring=list(input())

for i in range (len(inputstring)):
    newvalue=int(alphadict[inputstring[i]])
    valuelist.append(newvalue)
    
for i in range(len(valuelist)):
    f_total = valuelist[i] * 31 ** i
    total+= f_total

total = total % 1234567891

print(total)