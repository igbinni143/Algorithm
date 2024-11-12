import sys
input = sys.stdin.read

data = input().splitlines()
T = int(data[0])if data else 0
result = []

for i in range(1, T + 1):
    A, B = map(int, data[i].split())
    result.append(A + B)

# join을 사용해 빠르게 출력
print("\n".join(map(str, result)))