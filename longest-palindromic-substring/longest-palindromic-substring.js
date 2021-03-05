/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0
    for(let i = 0; i < s.length; i++){
        let oddLen = fromCenter(s, i, i)
        let evenLen = fromCenter(s, i, i + 1)
        let len = Math.max(oddLen, evenLen)
        if(len > end - start){
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    return s.slice(start, end + 1)
};

var fromCenter = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] == s[right]){
        left--
        right++
    }
    return right - left - 1
}