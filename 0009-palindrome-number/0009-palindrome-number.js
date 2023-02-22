/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numStringArray = x.toString().split('')
    let left = 0
    let right = numStringArray.length - 1
    while(left < right){
        if(numStringArray[left] !== numStringArray[right]) return false
        left++
        right--
    }
    
    return true
};