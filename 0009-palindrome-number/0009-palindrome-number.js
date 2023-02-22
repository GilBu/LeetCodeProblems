/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false
    
    let flippedNum = 0
    
    while(x > flippedNum){
        flippedNum = flippedNum * 10 + x % 10
        x = Math.floor(x / 10)
    }
    
    return flippedNum === x || Math.floor(flippedNum/10) === x
};
// var isPalindrome = function(x) {
//     let numStringArray = x.toString().split('')
//     let left = 0
//     let right = numStringArray.length - 1
//     while(left < right){
//         if(numStringArray[left] !== numStringArray[right]) return false
//         left++
//         right--
//     }
    
//     return true
// };

