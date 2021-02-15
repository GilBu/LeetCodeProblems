/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0, minPrice = Infinity
    for(let i = 0; i < prices.length; i++){
        if (minPrice > prices[i]){
            minPrice = prices[i]
        }else if (maxProfit < prices[i] - minPrice) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};