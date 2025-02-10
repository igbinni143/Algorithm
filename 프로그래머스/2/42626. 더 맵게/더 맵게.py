import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # 최소 힙 변환
    cnt = 0

    while len(scoville) > 1 and scoville[0] < K:
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        new_scoville = first + second * 2
        heapq.heappush(scoville, new_scoville)
        cnt += 1

    # 모든 음식이 K 이상인지 최종 확인
    return cnt if scoville and scoville[0] >= K else -1