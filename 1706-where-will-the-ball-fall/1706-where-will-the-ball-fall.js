/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    // keep track of row and col for each ball interate thru each row and adding cell to col
    let answer = []
    for(let b = 0; b < grid[0].length; b++){
        let col = b
        for(let row = 0; row < grid.length; row++){
            if((grid[row][col] === 1 && grid[row][col + 1] === -1) ||
                (grid[row][col] === -1 && grid[row][col - 1] === 1) ||
                (grid[row][col] === -1 && col === 0) ||
                (grid[row][col] === 1 && col === grid[row].length - 1)
              ) {
                col = -1
                break
            }
            col += grid[row][col]
        }
        answer.push(col)
    }
    
    return answer
};