/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return
    
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let prev = null
    let curr = slow
    
    while(curr !== null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    console.log(head, prev)
    let first = head
    let second = prev
    
    while(second.next !== null){
        let temp = first.next
        first.next = second
        first = temp
        temp = second.next
        second.next = first
        second = temp
    }
    
    return head
};