N, M = map(int, input().split())
song_dict = {}

for _ in range(N):
    data = input().split()
    title = data[1] 
    melody = ''.join(data[2:])
    prefix = melody[:3]  

    # 딕셔너리에 추가
    if prefix not in song_dict:
        song_dict[prefix] = [title]
    else:
        song_dict[prefix].append(title)

for _ in range(M):
    test_melody = ''.join(input().split()) 
    if test_melody in song_dict:
        matched_titles = song_dict[test_melody]
        if len(matched_titles) == 1:
            print(matched_titles[0])  
        else:
            print("?")  
    else:
        print("!") 