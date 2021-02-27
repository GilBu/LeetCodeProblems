/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let merged = false
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i - 1][0] <= intervals[i][0] && intervals[i][0] <= intervals[i - 1][1] ){
            if(intervals[i - 1][1] < intervals[i][1]){
                intervals.splice(i - 1, 2, [intervals[i - 1][0], intervals[i][1]])
            }else {
                intervals.splice(i, 1)
            }
            i--
            
        }else if(intervals[i][0] <= intervals[i - 1][0] && intervals[i - 1][0] <= intervals[i][1]){
            if(intervals[i][1] < intervals[i - 1][1]){
                intervals.splice(i - 1, 2, [intervals[i][0], intervals[i - 1][1]])
            }else intervals.splice(i - 1, 1)
            i--
        }else merged = true
    }
    return intervals
};