/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let current = x < 0 ? x * -1 : x, reversed = 0
    while(current != 0){
        reversed *= 10
        let digit = current % 10
        reversed = (reversed + digit)
        current = Math.floor(current / 10)
        console.log(reversed)
    }
    if(reversed > 2**31 - 1) return 0
    return x < 0 ? reversed * -1 : reversed
};