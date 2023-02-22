/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let length = nums.length
    let sum = (length + 1) * length / 2
    
    for(num of nums){
        sum -= num
    }
    
    return sum
};