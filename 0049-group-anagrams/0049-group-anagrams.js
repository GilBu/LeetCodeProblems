/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramHash = {}
    for(let i = 0; i < strs.length; i++){
        sortedStr = strs[i].split('').sort().join('')
        if(!anagramHash[sortedStr]) anagramHash[sortedStr] = []
        anagramHash[sortedStr].push(strs[i])
    }
    
    let anagramArray = []
    for(anagram in anagramHash){
        anagramArray.push(anagramHash[anagram])
    }
    
    return anagramArray
};