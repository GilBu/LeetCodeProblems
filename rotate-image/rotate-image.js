/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    
    for(let i = 0; i < matrix.length; i++){
        let j = 0; let k = matrix.length - 1
        while(j < k){
            [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]]
            j++
            k--
        }
    }
};