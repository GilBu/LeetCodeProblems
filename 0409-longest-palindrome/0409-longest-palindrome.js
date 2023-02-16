/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letters = new Map()
    
    for(char of s){
        if(!letters.has(char)) letters.set(char, 0)
        letters.set(char, letters.get(char) + 1)
    }
    
    let total = 0
    let odd = false
    for([key, value] of letters){
        if(value % 2) odd = true
        total += Math.floor(value / 2) * 2
    }
    
    return odd ? total + 1 : total
};