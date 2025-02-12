class Solution(object):
    def findRelativeRanks(self, score):
        score_dict={}
        score_newlist=[]
        sort_score=sorted(score, reverse=True)

        for i in range (len(sort_score)):
            j = sort_score[i]
            t = (sort_score.index(j)+1)
            score_dict[j]=t

        for i in range(len(score)):
            if score_dict[score[i]]==1:
                score_newlist.append("Gold Medal")

            elif score_dict[score[i]]==2:
                score_newlist.append("Silver Medal")

            elif score_dict[score[i]]==3:
                score_newlist.append("Bronze Medal")
            
            else:
                score_newlist.append (str(score_dict[score[i]]))
        return (score_newlist)