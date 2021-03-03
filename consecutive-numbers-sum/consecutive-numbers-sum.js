/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    let count = 1
  for (let item = 2; item < Math.sqrt(2 * N); item++) {
    if ((N - [(item + 1) * item] / 2) % item === 0) {
      count++
    }
  }
  return count
};