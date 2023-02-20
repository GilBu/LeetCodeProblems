/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set()
    for(const num of nums){
        if(!set.has(num)) set.add(num)
        else set.delete(num)
    }
    
    return set.values().next().value
};