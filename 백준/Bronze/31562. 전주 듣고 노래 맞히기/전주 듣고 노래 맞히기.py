N,M = map(int,input().split())
song_dict={}

for i in range (N):
    codes=""
    title_length,title,code = input().split(' ',2)
    code = code.split()
    codes = ''.join(code) 
    pre_code=codes[:3]

    if pre_code not in song_dict:
        song_dict[pre_code] = [title]
    else:
        song_dict[pre_code].append(title)

for _ in range (M):
    new_code = ''.join(input().split())
    if new_code in song_dict:
        right_titles = song_dict[new_code]
        if len(right_titles) == 1:
            print(right_titles[0])
        else:
            print("?")
    else:
        print("!")