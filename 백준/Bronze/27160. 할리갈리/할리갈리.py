N = int(input())

# 각 과일별 개수를 저장할 딕셔너리 초기화
fruit_counts = {
    'STRAWBERRY': 0,
    'BANANA': 0,
    'LIME': 0,
    'PLUM': 0
}

# N개의 카드 정보를 입력받아 처리
for _ in range(N):
    fruit_type, count = input().split()
    count = int(count)
    fruit_counts[fruit_type] += count

# 어떤 과일이든 총 개수가 5개이면 종을 쳐야 함
should_ring = False
for fruit in fruit_counts:
    if fruit_counts[fruit] == 5:
        should_ring = True
        break

# 결과 출력
print("YES" if should_ring else "NO")