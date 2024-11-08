def solution(participant, completion):
    participant.sort()
    completion.sort()
    
    newlist = list(zip(participant,completion))
    for p, c in newlist:
        if p != c:
            return p
    
    return participant[-1]



participant=["leo", "kiki", "eden"]
completion=["eden", "kiki"]

solution(participant,completion)


