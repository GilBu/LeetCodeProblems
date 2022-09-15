/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return [];
    let nodePositions = new Map()
    let queue = []
    queue.push({ node: root, col: 0})
    
    while(queue.length > 0) {
        let {node, col } = queue.shift()
        if(nodePositions.has(col)) nodePositions.get(col).push(node.val)
        else nodePositions.set(col, [node.val])
        if(node.left) queue.push({ node: node.left, col: col - 1 })
        if(node.right) queue.push({ node: node.right, col: col + 1 })
    }
    nodePositions = Array.from(nodePositions.entries())
    nodePositions.sort((a, b) => a[0] - b[0])
    return nodePositions.map((x) => x[1])
};