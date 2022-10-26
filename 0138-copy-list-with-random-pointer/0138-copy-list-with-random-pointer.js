/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function(head) {
//     /**
//     map for each node of the list and make a copy key would be the index
//     interate thru original list and create copy with the map copy nodes
    
//     */
//     let current = head;
//     while(current){ 
//         let copyNode = new Node(current.value, null, null);
//         copyNode.next = current.next;
//         console.log(copyNode)
//         current.next = copyNode;
//         current = copyNode.next;
//     }
    
//     current = head;
//     while (current){
//         let copy = current.next;
//         let next = copy.next;
//         if(current.random){
//             copy.random = current.random.next;
//         }
//         if(next){
//             copy.next = next.next;
//         }
        
//         current = next;
//     }
   
//     return head.next;
// };

var copyRandomList = function(head) {
    if (!head) return null;
    let curr = head;
    while (curr) {
        let copy = new Node(curr.val, curr.next, null);
        copy.next = curr.next;
        curr.next = copy;
        curr = curr.next;
        curr = curr.next;
    }
    
    curr = head;
    while(curr) {
        curr.next.random = curr.random ? curr.random.next : null;
        curr = curr.next.next;
    }
    
    curr = head;
    let result = head.next;
    let resPtr = result;
    while(curr) {
        curr.next = curr.next.next;
        curr = curr.next;
        resPtr.next = resPtr.next ? resPtr.next.next : null;
        resPtr = resPtr.next;
    }
    
    return result;
};
