/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""
    for(let i = 0; i < strs[0].length; i++){
        for(const str of strs){
            if(i > str.length || strs[0][i] !== str[i]) return prefix
        }
        prefix = prefix.concat(strs[0][i])
    }
    
    return prefix
};