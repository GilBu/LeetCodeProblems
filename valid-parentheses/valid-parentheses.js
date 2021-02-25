/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let per = 0, cur = 0, brac = 0, queue = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "("){
            per++
            queue.push(s[i])
        }
        else if(s[i] === ")" && (per == 0 || queue[queue.length - 1] != "(")) return false
        else if(s[i] === ")" && per > 0){
            per--
            queue.pop()
        }
        else if(s[i] === "{"){
            cur++
            queue.push(s[i])
        }
        else if(s[i] === "}" && (cur == 0 || queue[queue.length - 1] != "{")) return false
        else if(s[i] === "}" && cur > 0){
            cur--
            queue.pop()
        }
        else if(s[i] === "["){
            brac++
            queue.push(s[i])
        }
        else if(s[i] === "]" && (brac == 0 || queue[queue.length - 1] != "[")) return false
        else if(s[i] === "]" && brac > 0){
            brac--
            queue.pop()
        }
    }
    if(queue.length === 0) return true
    else return false
};