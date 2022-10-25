/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (digits == null || digits.length === 0) return []

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

      const result = [];
      const combi = (i, str) => {
        if (i === digits.length) {
          result.push(str)
          return
        }

        for (const char of map[digits[i]]) {
          combi(i + 1, str + char)
        }
      }

      combi(0, '')
      return result
    
};