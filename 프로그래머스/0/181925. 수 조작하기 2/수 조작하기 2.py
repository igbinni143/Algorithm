def solution(numLog):   
    newLog=[]
    for i in range (len(numLog)-1):
        if numLog[i] -numLog[i+1] == -1:
            newLog.append('w')
        elif numLog[i] -numLog[i+1] == 1:
            newLog.append('s')  
        elif numLog[i] -numLog[i+1] == -10:
            newLog.append('d')  
        elif numLog[i] -numLog[i+1] == 10:
            newLog.append('a')  
            
    return ("".join(newLog))
