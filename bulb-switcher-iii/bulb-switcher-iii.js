/**
 * @param {number[]} light
 * @return {number}
 */


/*
array of booleans of length light.length initalize as false
loop thru light and change boolean to corapondant index to true
    check if everything before it is true
    var hasOn = false
    var highestBulbOn = light[0]
    var highestConcurrent
    loop going backwards thru the boolean array
        if encounters a on change hasOn to true
        if encoutners a off and hason is true break
        if goes i 0 and it is true then increament count by 1
*/
var numTimesAllBlue = function(light) {
    let count = 0
    let highestBulbOn = light[0]
    let bulbsOn = 0
    let status = new Array(light.length).fill(false)
    for(let k = 0; k < light.length; k++){
        bulbsOn++
        highestBulbOn = Math.max(highestBulbOn, light[k])
        if(bulbsOn == highestBulbOn) count++
    }
    return count
};