/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return null
    let newList = new ListNode(head.val), curr = head.next
    while(curr){
        newList = new ListNode(curr.val, newList)
        curr = curr.next
    }
    return newList
};