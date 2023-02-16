/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let elementCount = new Map()
//     let majority = nums[0]
    
//     for(num of nums){
//         if(!elementCount.has(num)) elementCount.set(num, 0)
//         elementCount.set(num, elementCount.get(num) + 1)
//         if(elementCount.get(majority) < elementCount.get(num)) majority = num
//     }
    
//     return majority
// };

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b)
    
    return nums[Math.floor(nums.length / 2)]
};