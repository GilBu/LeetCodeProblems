/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let idx = heights.length - 1
    let tallest = heights[idx]
    let oceanViewBuildings = [idx]
    for(let i = idx - 1; i >= 0; i--){
        if(heights[i] > tallest) oceanViewBuildings.unshift(i)
        tallest = tallest < heights[i] ? heights[i] : tallest
    }
    return oceanViewBuildings
};