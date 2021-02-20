/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, leftIdx = 0, rightIdx = 0, right = 0, water = 0, fill = 0
    for(let n = 0; n < height.length; n++) {
        let elev = height[n]
        
        if(elev > 0 && left === 0){
            left = elev
            leftIdx = n
        }
        
        if(elev < left){
            fill += left - elev
        }
        
        if(elev >= left){
            water += fill
            fill = 0
            left = elev
            leftIdx = n
        }
        
        if(fill > 0 && n === height.length - 1 && leftIdx < height.length - 1){
            n = leftIdx
            left -= 1
            fill = 0
        }
    }
    return water
};