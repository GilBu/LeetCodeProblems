/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let integer = 0
    let sArray = s.split('')
    
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case('I'):
                if(s[i + 1] === 'V' || s[i + 1] === 'X') integer -= 1
                else integer += 1
                break
            case('V'):
                integer += 5
                break
            case('X'):
                if(s[i + 1] === 'L' || s[i + 1] === 'C') integer -= 10
                else integer += 10
                break
            case('L'):
                integer += 50
                break
            case('C'):
                if(s[i + 1] === 'D' || s[i + 1] === 'M') integer -= 100
                else integer += 100
                break
            case('D'):
                integer += 500
                break
            case('M'):
                integer += 1000
                break
            default:
                break
        }
    }
    
    return integer
};