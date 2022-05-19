/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0, sum = 0
    let map = new Map()
    map.set(0, 1)
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        const curr = map.get(sum - k) || 0
        map.set(sum, (map.get(sum) || 0) + 1)
        count += curr
    }
    return count
};