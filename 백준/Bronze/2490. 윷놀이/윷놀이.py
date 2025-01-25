one = 0
for i in range (3):
    play = input().split()
    zero = 0

    for j in range (len(play)):
        if play[j] == "0":
            zero += 1
    if zero == 4:
        print("D")
    elif zero == 3:
        print("C")
    elif zero == 2:
        print("B")
    elif zero == 1:
        print("A")
    elif zero == 0:
        print("E")