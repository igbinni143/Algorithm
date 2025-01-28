def solution(rsp):
    rsp.split()
    meresp=[]
    for i in range(len(rsp)):
        if rsp[i] == "2" :
            meresp.append("0")
        elif rsp[i]=="0":
            meresp.append("5")
        else:
            meresp.append("2")
    
    answer = "".join(meresp)
    return answer