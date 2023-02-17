/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let lengthA = a.length - 1
    let lengthB = b.length - 1
    
    if(lengthA < lengthB) return addBinary(b, a)
    
    let carry = 0
    let result = ''
    for(let i = lengthA; i >= 0; i--) {
        if(a[i] === '1') carry++
        if(lengthB >= 0 && b[lengthB] === '1') {
            carry++
        }
        lengthB--
        if(carry % 2 === 1) {
            result = result.concat('1')
        } else {
            result = result.concat('0')
        }
        
        carry = Math.floor(carry / 2)
    }
    
    if (carry === 1) result = result.concat('1')
    return result.split('').reverse().join('')
};