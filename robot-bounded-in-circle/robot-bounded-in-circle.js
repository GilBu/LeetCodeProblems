/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = [0,0,0,0]//north,east,south,west
    let face = 0
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < instructions.length; j++){
            if(instructions[j] === 'G'){
                dir[face] += 1
            }else if(instructions[j] === 'R'){
                face = face + 1 > 3 ? 0 : face + 1
            }else if(instructions[j] === 'L'){
                face = face - 1 < 0 ? 3 : face - 1
            }
        }
    }
    return dir[0] - dir[2] === 0 && dir[1] - dir[3] === 0
};