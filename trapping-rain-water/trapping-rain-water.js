/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1, high = 0, low = 0, result = 0
    
    while (left < right){
        low = height[height[left] < height[right] ? left++ : right--]
        high = Math.max(high, low)
        result += high - low
    }
    
    return result
};