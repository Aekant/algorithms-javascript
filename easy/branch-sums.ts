/**
 * Given a binary tree calculate the branch sums
 * 
 * A branch is a path from root node to leaf node
 */

/**
 * Here we will be passing the running sum from top, instead of bottom up where the sum is propagated
 */

 interface BinaryNode {
  value: number
  left: BinaryNode
  right: BinaryNode
}

const branchSums = (binaryTreeHead: BinaryNode) => {
  const branchSumHelper = function(binaryNode: BinaryNode, sum: number = 0, arr: number[] = []) {
    // check if the node exists
    if(binaryNode === undefined)
      return

    branchSumHelper(binaryNode.left, sum + binaryNode.value, arr)
    branchSumHelper(binaryNode.right, sum + binaryNode.value, arr)

    // both right and left subtrees are traversed, then it could be leaf node or any node in middle of the tree
    if(binaryNode.left === undefined && binaryNode.left === undefined)
      arr.push(binaryNode.value + sum)
  }
}

/**
 * Time Complexity O(N) since we traverse each node of the tree
 * Space Complexity in terms of stack calls is O(d), d = depth of tree but we are also maintaining an array
 * The number of elements in array are equal to the number of leaf nodes, and the amount of leaf nodes in a balanced tree
 * are almost half the total number of nodes so the complexity would be O(N)
 * 
 * A more complicated way to think of it would be to figure out how the number of nodes are related to depth. Its simple 2^d
 * and d is related to the number of nodes as log2(N), so 2 raise to the power of log2(N) is N hence O(N) space complexity
 */