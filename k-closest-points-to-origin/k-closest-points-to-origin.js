/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let smallest = 0, farthest = 0, dists = []
    for(let i = 0; i < points.length; i++) {
        if(dists.length < k - 1) dists.push(points[i])
        else if(dists.length === k - 1){
            dists.push(points[i])
            dists.sort((a, b) => Math.sqrt(a[0]**2 + a[1]**2) - Math.sqrt(b[0]**2 + b[1]**2))
        }else{
            dists.push(points[i])
            dists.sort((a, b) => Math.sqrt(a[0]**2 + a[1]**2) - Math.sqrt(b[0]**2 + b[1]**2))
            dists.pop()
        }
    }
    return dists
};