/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let moves = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]
    let queue = [[0,0]], cur = [], steps = 0, visted = new Set()
    while(queue.length != 0){
        let next = []
        while(queue.length != 0){
            cur = queue.pop()
            if(cur[0] === x && cur[1] === y) return steps
            moves.forEach(move => {
                let newX = move[0]+cur[0], newY =  move[1]+cur[1]
                
                if(!visted.has(`${newX},${newY}`)){
                    next.push([newX, newY])
                    visted.add(`${newX},${newY}`)
                }
            })
        }
        queue = next
        steps += 1
    }
};