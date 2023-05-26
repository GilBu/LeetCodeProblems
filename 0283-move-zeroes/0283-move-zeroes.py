class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        first_zero = 0
        for i in range(len(nums)):
            if(nums[i] != 0):
                j = i + 1
                nums[first_zero], nums[i] = nums[i], nums[first_zero]
                first_zero += 1