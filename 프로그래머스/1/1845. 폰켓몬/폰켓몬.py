def solution(nums):
    a = len(nums)/2
    nums.sort()
    new_nums={}

    for i in range(len(nums)):
        if nums[i] not in new_nums:
            new_nums[nums[i]]=1
        else:
            new_nums[nums[i]]+=1

    if a >= len(new_nums):
        return(len(new_nums))
    else:
        return(a)
    

solution([3,3,3,2,2,2])