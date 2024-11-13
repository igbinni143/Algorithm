a = int(input())
b = str(input())

numC = 0
alpC = 0
waitlist = []
is_malfunction = False

for i in range(len(b)):
    if is_malfunction:
        break 

    if b[i] == "L":
        waitlist.append("L")
    elif b[i] == "R":
        if "L" in waitlist:
            waitlist.remove("L")
            alpC += 1
        else:
            is_malfunction = True

    elif b[i] == "S":
        waitlist.append("S")
    elif b[i] == "K":
        if "S" in waitlist:
            waitlist.remove("S")
            alpC += 1
        else:
            is_malfunction = True

    elif b[i].isdigit():
        numC += 1

print(numC + alpC)