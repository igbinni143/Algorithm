N, M = map(int, input().split())  # N: 수업 수, M: 기준 수업 수
count_Student = {}  # 학생 ID별 수업 참여 횟수 저장

for _ in range(N):
    T = int(input())  # 현재 수업의 학생 수 (입력 값에 따라 사용)
    id_Student = input().split()  # 현재 수업에 참여한 학생 ID 리스트

    for student_id in id_Student:
        if student_id not in count_Student:  # 새로운 학생
            count_Student[student_id] = 1  # 초기화
        else:  # 이미 등록된 학생
            count_Student[student_id] += 1  # 수업 횟수 증가

# M개 이상의 수업을 들은 학생 수 계산
result = 0
for count in count_Student.values():
    if count >= M:
        result += 1

print(result)