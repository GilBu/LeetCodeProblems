/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map ()
    let count = 0, total = 0
    map.set(0,1)
    for (let i = 0; i < nums.length; i++){
        total += nums[i]
        if(map.has(total - k)) count += map.get(total - k)
        if(map.has(total)) map.set(total, map.get(total) + 1)
        else map.set(total, 1)
    }
    return count
};