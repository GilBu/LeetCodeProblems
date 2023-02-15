/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    
    let letters = new Map()
    
    for(let i = 0; i < magazine.length; i++){
        if(!letters.has(magazine[i])) letters.set(magazine[i], 0)
        letters.set(magazine[i], letters.get(magazine[i]) + 1)
        
        if(!letters.has(ransomNote[i])) letters.set(ransomNote[i], 0)
        letters.set(ransomNote[i], letters.get(ransomNote[i]) - 1)
    }
    
    for([key, value] of letters) {
        if(key != undefined && value < 0) return false
    }
    
    return true
};