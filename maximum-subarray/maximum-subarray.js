/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0]
    let maxSum = Math.max(...nums)
    let currentSum = 0
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        if(currentSum < 0) currentSum = 0
        else if(currentSum > maxSum) maxSum = currentSum
    }
    return maxSum
};