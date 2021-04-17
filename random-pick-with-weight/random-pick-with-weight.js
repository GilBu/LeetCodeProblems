/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.arr = []
    this.sum = w.reduce((total, num) => total + num)
    let total = 0
    for(let i = 0; i < w.length; i++){
        total += w[i] / this.sum
        this.arr.push(total)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rand = Math.random()
    console.log(rand)
    for(let j = 0; j < this.arr.length; j++){
        if(this.arr[j] > rand) return j
    }
    return 0
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */