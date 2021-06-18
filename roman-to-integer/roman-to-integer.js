/**
 * @param {string} s
 * @return {number}
 */
romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        romans[s[i]] < romans[s[i+1]] ? value -= romans[s[i]]: value += romans[s[i]]
    }
    return value
};