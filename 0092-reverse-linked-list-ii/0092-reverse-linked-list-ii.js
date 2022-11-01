/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let start = head, cur = head;
    let size = 1;
    
    while (size < left) {
        start = cur;
        cur = cur.next;
        size++;
    }
    
    let prev = null, tail = cur;
    
    while (size <= right) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        size++;
    }
    
    start.next = prev;
    tail.next = cur;
    return left == 1 ? prev : head;
};