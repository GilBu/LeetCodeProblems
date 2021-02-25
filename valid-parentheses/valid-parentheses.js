/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let paren = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
        
    }
    for(let i = 0; i < s.length; i++){
        if(paren[s[i]]) stack.push(paren[s[i]])
        else if(stack[stack.length - 1] === s[i]) stack.pop()
        else if(stack[stack.length - 1] != s[i]) return false
    }
    console.log(stack)
    return stack.length === 0
};