/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    if(nums.length === 1)
        return;
    // 5 3 3 1 3 3 5
    
    let keyElementFound = false;
    let i = nums.length-2;
    let keyElementIndex = null;
    while(i >= 0) {
        
        if(nums[i+1] > nums[i]) {
            keyElementFound = true;
            keyElementIndex = i;
            break;
        }
        
        i--;
    }
    
    if(keyElementFound === false){
        reverse(0,nums.length-1,nums);
        return;
    }
    
    let smallestLarger = null;
    
    while(i < nums.length) {
        i++;
        if(nums[i] > nums[keyElementIndex] && (smallestLarger === null || nums[i] <= nums[smallestLarger]) ) {
            smallestLarger = i;
        }
    }
    
    swap(smallestLarger, keyElementIndex, nums);
    
    reverse(keyElementIndex+1, nums.length-1, nums);
};

function reverse(a,b,arr) {
    while(a < b) {
        swap(a,b,arr);
        a++;
        b--;
    }
}

function swap(a,b,arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}