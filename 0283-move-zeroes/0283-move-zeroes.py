class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        right = len(nums) - 1
        for i in range(len(nums) - 1, -1, -1):
            if(nums[i] == 0 and i != right):
                j = i + 1
                while(j <= right):
                    nums[j - 1] = nums[j]
                    nums[j] = 0
                    j += 1
                right -= 1