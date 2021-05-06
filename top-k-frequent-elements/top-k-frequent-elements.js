/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numHash = new Map()
    for(let i = 0; i < nums.length; i++){
        if(!numHash.has(nums[i])) numHash.set(nums[i], 0)
        numHash.set(nums[i], numHash.get(nums[i]) + 1)
    }
    
    let numArr = new Array()
    numHash.forEach((value, key) => {
        numArr.push([key,value])
    })
    
    numArr.sort((a,b) => b[1] - a[1])
    let result = []
    for(let j = 0; j < k; j++){
        result.push(numArr[j][0])
    }
    return result
};