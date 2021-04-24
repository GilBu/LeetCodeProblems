/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = new Set()
    let queue = [], largest = 0
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(!visited.has(`${row},${col}`) && grid[row][col] === 1){
                visited.add(`${row},${col}`)
                queue.push([row,col])
            }
            if(queue.length > 0){
                largest = Math.max(checkNeighbors(queue, visited, grid), largest)
            }
        }
    }
    return largest
};

let checkNeighbors = (queue, visited, grid) =>{
    let directions = [[0,1],[1,0],[-1,0],[0,-1]]
    let size = 1
    while(queue.length > 0){
        let curr = queue.shift()
        for(let dir = 0; dir < directions.length; dir++){
            let row = curr[0] + directions[dir][0]
            let col = curr[1] + directions[dir][1]
            if(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) continue
            if(!visited.has(`${row},${col}`) && grid[row][col] === 1){
                size++
                queue.push([row,col])
            }
            visited.add(`${row},${col}`)
        }
    }
    return size
}