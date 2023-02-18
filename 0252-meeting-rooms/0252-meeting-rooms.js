/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length === 0) return true
    let sorted = intervals.sort((a, b) => a[0] - b[0])
    let latest = sorted[0][1]
    for(let i = 1; i < sorted.length; i++){
        if(sorted[i][0] < latest) return false
        if(latest < sorted[i][1]) latest = sorted[i][1]
    }
    return true
};