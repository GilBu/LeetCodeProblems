class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        num_set = set()
        for num in nums:
            if not num in num_set:
                num_set.add(num)
            else:
                num_set.remove(num)
        return list(num_set)[0]