/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rowS = 0, colS = 0, rowE = matrix.length - 1, colE = matrix[0].length - 1
    let arr = [], count = 0, total = matrix[0].length * matrix.length
    while(count < total){
        for(let i = colS; i <= colE; i++){
            arr.push(matrix[rowS][i])
            count++
            if(count === total) break
        }
        rowS++
        if(count === total) break
        for(let j = rowS; j <= rowE; j++){
            arr.push(matrix[j][colE])
            count++
            if(count === total) break
        }
        colE--
        if(count === total) break
        for(let k = colE; k >= colS; k--){
            arr.push(matrix[rowE][k])
            count++
            if(count === total) break
        }
        rowE--
        if(count === total) break
        for(let l = rowE; l >= rowS; l--){
            arr.push(matrix[l][colS])
            count++
            if(count === total) break
        }
        colS++
        if(count === total) break
    }
    return arr
    
};