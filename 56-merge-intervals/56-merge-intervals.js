/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let merged = []
    merged.push(intervals[0])
    for(let i = 1; i<intervals.length; i++){
        let current = merged.length - 1
        if(merged[current][1] >= intervals[i][0] && merged[current][1] < intervals[i][1]) {
                merged[current][1] = intervals[i][1]
        } else if(merged[current][1] < intervals[i][0]) {
            merged.push(intervals[i])
        }
        
    }
    return merged
};