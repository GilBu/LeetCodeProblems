/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivoted = false, prev = nums[0]
    if(prev === target) return 0
    for(let i = 1; i < nums.length; i++){
        if(prev > nums[i]) pivoted = true
        if(nums[i] === target) return i
        if(nums[i] > target && pivoted) return -1
    }
    return -1
};