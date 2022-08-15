/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    // if(isDescendant(p, value)) return p.value
    // if(isDescendant(q, value)) return q.value
    let currP = p
    let currQ = q
    let ancestors = new Set()
    while(currP != null){
        ancestors.add(currP.val)
        currP = currP.parent
    }
    
    while(currQ != null){
        if(ancestors.has(currQ.val)) return currQ
        currQ = currQ.parent
    }
};

var isDescendant = function(node, value) {
    if(node.val === null){
        return false
    } else if ( node.val === value) {
        return true
    } else {
        isDescendant(node.left, value)
        isDescendant(node.right, value)
    }
    
}