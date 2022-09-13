/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let numMap = new Uint16Array(101), third = target / 3, ans = 0
    for(let i in arr) numMap[arr[i]]++
    
    for(let k = Math.min(target, 100); k >= third; k--){
        let remainder = target - k, half = remainder / 2
        for(let j = Math.min(remainder, k); j >= half; j--){
            let i = remainder - j, x = numMap[i], y = numMap[j], z = numMap[k], combin
            if (i === k) combin = x * (x-1) * (x-2) / 6
            else if (i === j) combin = x * (x-1) / 2 * z
            else if (j === k) combin = x * y * (y-1) / 2
            else combin = x * y * z
            ans = (ans + combin) % 1000000007
        }
    }
    return ans
};