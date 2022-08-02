/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let sorted = []
    for(let j = 0; j < matrix[0].length; j++){
        for(let i = 0; i < matrix.length; i++){
            let idx = sortedIndex(sorted, matrix[i][j])
            if(sorted.length === 0) sorted.push(matrix[i][j])
            else sorted.splice(idx, 0, matrix[i][j])
        }
    }
    console.log(sorted)
    return sorted[k - 1]
};

function sortedIndex(array, value) {
    var left = 0,
        right = array.length
    
    while(left < right) {
        let mid = (left + right) >>> 1;
        if (array[mid] < value) left = mid + 1
        else right = mid
    }
    return left
}