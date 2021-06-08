/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const map = new Map()
    nums.sort((a,b) => a - b)
    for (const num of nums) {
        if(!map.has(num)) map.set(num, 1)
        else map.set(num, map.get(num) + 1)
    }
    
    let prevSum = 0, currSum = 0, prevKey = -1
    
    for(let [key, value] of map.entries()) {
        const m = Math.max(prevSum, currSum)
        key = parseInt(key)
        if(key - 1 !== prevKey) {
            currSum = key * value + m
            prevSum = m
        }else {
            currSum = key * value + prevSum
            prevSum = m
        }
        prevKey = key
    }
    return Math.max(prevSum, currSum)    
};