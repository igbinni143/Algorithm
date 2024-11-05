n = int(input())

words = [input().strip() for _ in range(n)]


for word in words:
    reversed_word = word[::-1]  
    

    if reversed_word in words:
        length = len(word)  
        middle_char = word[length // 2]  
        print(length, middle_char)
        break  