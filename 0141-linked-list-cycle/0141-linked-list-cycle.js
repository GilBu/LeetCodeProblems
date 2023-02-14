/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let nodes = new Set()
    let curr = head
    while(curr){
        if(nodes.has(curr)) return true
        nodes.add(curr)
        curr = curr.next
    }
    
    return false
};