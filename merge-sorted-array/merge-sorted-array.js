/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n
    nums2.forEach(ele => {
        nums1.push(ele)
    })
    nums1.sort((a,b) => a-b)
};