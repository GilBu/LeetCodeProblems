/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let numLen1 = num1.length - 1, numLen2 = num2.length - 1, carry = 0, result = ''
    while(numLen1 >= 0 || numLen2 >= 0 || carry > 0){
        let digit1 = numLen1 >= 0 ? num1.charAt(numLen1) - '0': 0
        let digit2 = numLen2 >= 0 ? num2.charAt(numLen2) - '0': 0
        let value = digit1 + digit2 + carry
        carry = Math.floor(value / 10)
        // console.log(value)
        // console.log(carry)
        result = `${value >= 10 ? value % 10 : value}` + result
        // console.log(result)
        numLen1--
        numLen2--
    }
    return result
};