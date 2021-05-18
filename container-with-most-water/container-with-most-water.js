/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0, left = 0, right = height.length - 1
    
    while(left < right){
        let shorterSide = Math.min(height[left], height[right])
        
        maxArea = Math.max(maxArea, (right - left) * shorterSide)
        
        if(height[left] < height[right]) left++
        else right--
    }
    return maxArea
};