/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === '0') return 0
    
    
    let decode = new Array(s.length + 1).fill(0)
    
    decode[0] = 1
    decode[1] = 1
    
    for(let i = 2; i <= s.length; i++){
        let digit = Number(s.slice(i - 1, i))
        if(digit >= 1 && digit <= 9) decode[i] += decode[i-1]
        
        let digits = Number(s.slice(i - 2, i))
        if(digits >= 10 && digits <= 26) decode[i] += decode[i-2]
    }
    
    return decode[s.length]
};