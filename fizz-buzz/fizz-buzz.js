/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = []
    for(let i = 1; i <= n; i++){
        let fizz = i % 3 === 0
        let buzz = i % 5 === 0
        if(fizz && buzz) result.push('FizzBuzz')
        else if(fizz) result.push('Fizz')
        else if(buzz) result.push('Buzz')
        else result.push(`${i}`)
    }
    return result
};