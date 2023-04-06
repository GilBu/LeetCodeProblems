class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = collections.Counter(nums)
        largest = nums[0]
        for num in count:
            if count[num] > count[largest]:
                largest = num
        return largest