/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let build = (s) => {
        let ans = []
        for(const char of s){
            if (char !== '#'){
                ans.push(char)
            } else {
                ans.pop()
            }
        }
        console.log(ans)
        return ans.join('')
    }
    return build(s) === build(t)
};