def solution(str1, str2):
    answer = ''
    answerlist=[]
    for i in range (len(str1)):
        answerlist.append(str1[i])
        answerlist.append(str2[i])
    answer = "".join(answerlist)
    return answer

solution("aaaaa","bbbbb")