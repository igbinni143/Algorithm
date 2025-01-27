def solution(my_string, overwrite_string, s):
    lenc=len(overwrite_string)
    # answer=my_string.replace(my_string[s:s+lenc],overwrite_string)
    answer = my_string[:s] + overwrite_string + my_string[s+lenc:]
    return answer


solution("He11oWor1d", "lloWorl", 2)
