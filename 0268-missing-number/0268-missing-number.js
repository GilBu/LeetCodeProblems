/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numSet = new Set()
    
    for(let i = 0; i <= nums.length; i++){
        numSet.add(i)
    }
    
    for(num of nums){
        numSet.delete(num)
    }
    
    return numSet.values().next().value
};