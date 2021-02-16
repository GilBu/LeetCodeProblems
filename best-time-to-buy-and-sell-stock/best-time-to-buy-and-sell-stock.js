/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, current = 0
    for(let i = 1; i < prices.length; i++){
        current = Math.max(0, current += prices[i] - prices[i-1])
        maxProfit = Math.max(current, maxProfit)
    }
    return maxProfit
};