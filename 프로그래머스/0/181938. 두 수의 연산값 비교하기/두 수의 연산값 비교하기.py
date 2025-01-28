def solution(a, b):
    ab = int(f"{a}{b}")
    twoab = 2*a*b
    if ab>=twoab:
        answer = ab
    else:
        answer=twoab

    return answer