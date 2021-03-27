/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length === 1) return
    let result = [], cur = '', num = 0, len = chars.length
    for(let i = 0; i < len; i++){
        if(cur != chars[i]){
            cur = chars[i]
            num = 1
            chars.push(chars[i])
        }else{
            num++
        }
        if((cur != chars[i + 1] || i + 1 >= len) && num > 1){
            let numArr = num.toString().split('')
            for(let j = 0; j < numArr.length; j++){
                chars.push(numArr[j])
            }
        } 
    }
    chars.splice(0,len)
};