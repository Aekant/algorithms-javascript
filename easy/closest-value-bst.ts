/**
 * Find the closest value in a BST
 */

/**
 * In a Binary tree when inserting a value, the given value will traverse through its
 * closest smaller and larger value
 */

interface BinaryNode {
  value: number
  left: BinaryNode
  right: BinaryNode
}

const closestValueBst = (binaryTreeHead: BinaryNode, target: number) => {
  const valueFinderHelper = function(binaryNode: BinaryNode, target: number, closest = {value: Number.POSITIVE_INFINITY}) {
    // base case
    if(binaryNode === undefined)
      return closest.value

    closest.value = Math.abs(closest.value - target) > Math.abs(binaryNode.value - target) ? binaryNode.value : closest.value

    // if node value is greater then move to the left of the tree
    if(binaryNode.value > target)
      return valueFinderHelper(binaryNode.left, target, closest)
    // if node value is less then move to the right of the tree
    else if(binaryNode.value < target)
      return valueFinderHelper(binaryNode.right, target, closest)
    // if the value is equal then simply return the value
    else 
      return binaryNode.value
  }

  return valueFinderHelper(binaryTreeHead, target)
}

/**
 * Time Complexity O(log(N)) but in worst case scenario that the tree has one branch then O(N)
 * Space Complexity O(d), d = depth of the tree but in worst case scenario when the tree has one branch O(N)
 */