/**
 * @param {character[][]} grid
 * @return {number}
 */

var dfs = function(grid, r, c) {
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length ||  grid[r][c] === '0') return
    grid[r][c] = "0"
    dfs(grid, r + 1, c)
    dfs(grid, r - 1, c)
    dfs(grid, r, c + 1)
    dfs(grid, r, c - 1)
}

var numIslands = function(grid) {
    let islandCount = 0
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "1") {
                islandCount++
                dfs(grid, i, j)
            }
        }
    }
    return islandCount
};