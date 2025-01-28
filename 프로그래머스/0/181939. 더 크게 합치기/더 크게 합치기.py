def solution(a, b):
    a=str(a)
    b=str(b)
    ab=a+b
    ab=int(ab)
    ba=b+a
    ba=int(ba)
    if ab>=ba:
        answer= ab;
    else:
        answer= ba;
    return answer