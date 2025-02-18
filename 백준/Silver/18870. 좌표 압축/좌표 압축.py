N = int(input())
number = map(int,input().split())
numbers=list(number)
num_set = set(numbers)

num_set_sort=sorted(num_set)
#print(num_set_sort)

new_dict={}
for i in range(len(num_set_sort)):
  new_dict[num_set_sort[i]]=i

for i in range(len(numbers)):
  a = new_dict.get(numbers[i])
  print(a, end=" ")
