/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.times = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.times.has(key)) this.times.set(key, [])
    this.times.get(key)[timestamp] = value
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.times.has(key)) return ''
    const result = this.times.get(key)
    if(result[timestamp]) return result[timestamp]
    while(timestamp-- >= 0){
        if(result[timestamp]) return result[timestamp]
    }
    return ''
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */