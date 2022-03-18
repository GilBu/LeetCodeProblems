/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let numHash = {}
    let results = []
    
    if(nums.length < 3) {
        return []
    }
    
    for(let i = 0; i < nums.length; i++){
        if(!numHash[nums[i]]){
            numHash[nums[i]] = 1;
        }else {
            numHash[nums[i]] += 1;
        }
    }
    
    if(numHash[0] === nums.length) return [[0,0,0]]
    nums.sort((a,b) => a-b)
    
    for(let j = 0; j < nums.length; j++){
        if(j > 0 && nums[j] === nums[j - 1]) continue
        let l = j + 1
        let k = nums.length - 1
        while(k>l){
            if(nums[j] + nums[l] + nums[k] === 0) {
                results.push([nums[j], nums[l], nums[k]])
                while(nums[l] === nums[l+1]) l++;
                while(nums[k] === nums[k-1]) k--;
                l++
                k--
            } else if(nums[j] + nums[l] + nums[k] > 0){
                k--
            } else if(nums[j] + nums[l] + nums[k] < 0){
                l++
            }
        }
            
    }
    
    return results
};