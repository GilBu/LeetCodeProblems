/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = Math.ceil((right - left)/ 2)

    while(left <= right){
        console.log(mid)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        mid = Math.ceil((right - left)/ 2) + left
    }

    return -1
};