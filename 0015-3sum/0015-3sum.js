/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let threeSums = []
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] > 0) break
        
        if(i === 0 || nums[i - 1] != nums[i]){
            let j = i + 1
            let k = nums.length - 1
            while(j < k){
                let sum = nums[i] + nums[j] + nums[k]
                if(sum < 0){
                    let oldJ = nums[j]
                    j++
                    while(nums[j] === oldJ && j < k) j++
                }else if(sum === 0){
                    threeSums.unshift([nums[i],nums[j],nums[k]])
                    j++
                    k--
                    while(j < k && nums[j] === nums[j - 1]) j++
                }else if (sum > 0){
                    let oldK = nums[k]
                    k--
                    while(nums[k] === oldK && j < k) k--
                }
            }
        }
    }
    return threeSums
};