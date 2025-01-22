menu_count = int(input())

menu_list = list(input().split())
have_list = list(input().split())

for i in range(len(have_list)):
    a = have_list[i]
    if a in menu_list:
        menu_list.remove(a)

for i in range (len(menu_list)):
    print(menu_list[i])