/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let totalOne = 0
    while(n > 0){
        totalOne += 1
        if(n === 1) break
        console.log(n)
        n = n - Math.pow(2, Math.floor(Math.log(n) / Math.log(2)))
    }
    return totalOne
};