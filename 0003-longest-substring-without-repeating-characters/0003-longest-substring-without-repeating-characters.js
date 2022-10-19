/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let chars = {}
    let longestLength = 0
    let left = 0
    let right = 0
    
    while(right < s.length){
        let rChar = s[right]
        if(!chars[rChar]) chars[rChar] = 0
        chars[rChar] += 1
        
        while(chars[rChar] > 1){
            let lChar = s[left]
            chars[lChar] -= 1
            left++
        }
        right++
        longestLength = Math.max(longestLength, right - left)
    }
    
    return longestLength
};