/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsHash = {};
    nums.forEach((num, idx) => {
        if(!numsHash[num]) numsHash[num] = []
        numsHash[num].push(idx)
    })
    let keys = Object.keys(numsHash)
    for(let i = 0; i < keys.length; i++) {
        let num2 = target - keys[i]
        if(num2 - keys[i] === 0 && numsHash[keys[i]].length >= 2) {
            return [numsHash[keys[i]][0], numsHash[keys[i]][1]]
        } else if(numsHash[num2] && numsHash[num2].length > 0) {
            return [numsHash[keys[i]][0], numsHash[num2][0]]
        }
    }
    
    return [0, 0]
};