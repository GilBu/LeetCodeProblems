/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0, h)
    verticalCuts.push(0, w)
    horizontalCuts.sort((a,b) => a - b)
    verticalCuts.sort((a,b) => a - b)
    let maxH = 0, maxW = 0
    for(let i = 1; i < horizontalCuts.length; i++){
        maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1])
    }
    
    for(let j = 1; j < verticalCuts.length; j++){
        maxW = Math.max(maxW, verticalCuts[j] - verticalCuts[j - 1])
    }
    console.log(maxH, maxW)
    return (maxH * maxW)  % (1e9 + 7)
};