/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.mem = {}
    this.positions = new Map()
    for(let i=0; i<wordsDict.length; i++) {
        const word = wordsDict[i]
        if(!this.positions.has(word)) this.positions.set(word, [])
        this.positions.get(word).push(i)
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    if(this.mem[word1] && this.mem[word1][word2]) return this.mem[word1][word2]
    const a = this.positions.get(word1)
    const b = this.positions.get(word2)
    let min = Infinity
    
    const binarySearch = (pos) => {
        let low = 0
        let high = b.length - 1

        while(low <= high) {
            const middle = Math.floor((low + high) / 2)
            if(b[middle] < pos) {
                low = middle + 1
            } else {
                high = middle - 1
            }
        }
        if(high < 0) return Math.abs(pos - b[low])
        
        if(low >= b.length) return Math.abs(pos - b[high])
        
        return Math.min(Math.abs(pos - b[low]), Math.abs(pos - b[high]))
    }
    for(const posA of a) {
        min = Math.min(min, binarySearch(posA))
    }
    this.mem[word1] = this.mem[word1] || {}
    this.mem[word2] = this.mem[word2] || {}
    this.mem[word1][word2] = min
    this.mem[word2][word1] = min
    return min
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */