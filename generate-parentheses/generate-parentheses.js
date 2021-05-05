/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    
    function createParenthesis(l, r, s) {
        if (l > r) return
        
        if(l === 0 && r === 0){
            result.push(s)
            return
        }
        
        if(l > 0) createParenthesis(l - 1, r, s + '(')
        if(r > 0) createParenthesis(l, r - 1, s + ')')
    }
    
    createParenthesis(n, n, '')
    return result
};