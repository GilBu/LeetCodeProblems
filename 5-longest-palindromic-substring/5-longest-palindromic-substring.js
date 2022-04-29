/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let largest = s[0]
    
    for(let i = 0; i < s.length - 1; i++){
        for(let j = i + 1; j < s.length; j++){
            let substr = s.substring(i,j + 1)
            if(isPalindrome(substr)) {
                if(largest.length < substr.length) largest = substr
            }
        }
    }
    
    return largest
};

var isPalindrome = function(s) {
    let k = s.length - 1
    for(let i = 0; i < k; i++){
        if(s[i] != s[k]) return false     
        k--
    }
    return true
}