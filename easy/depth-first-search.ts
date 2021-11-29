/**
 * We need to do a depth first search on a Binary tree
 * A depth first search is just a preorder search in Binary tree
 */


interface BinaryNode {
  name: string
  left: BinaryNode
  right: BinaryNode
}

const depthFirstSearch = (treeHead: BinaryNode) => {
  const searchHelper = function(node: BinaryNode, arr: string[] = []) {
    if(node === undefined)
      return
    
    // push the node in the array first
    arr.push(node.name)

    // now calling the function on the each of the children
    searchHelper(node.left, arr)
    searchHelper(node.right, arr)

    return
  }

  return searchHelper(treeHead)
}


/**
 * Time Complexity
 * So each function call takes 1 complexity
 * each comparison takes 1 complexity
 * now here we have a function call inside a function
 * so the complexity is basically how many times a function is called
 * Well the number of times a function is called depends on the fact that how many Nodes are there in the tree
 * So let say if we have 7 nodes then 15 calls are made
 * And if we have 3 nodes then 7 calls are made
 * 
 * By that regard the complexity is straight O(2N + 1) which is O(N)
 * 
 * Another way of thinking is this, the number of calls are 2^d - 1 where d = depth
 * and d = log(N+1)
 * 
 * so 2^(log(N+1)) is 2(N+1)
 * 
 * which becomes 2N+2-1 and finally 2N-1 which is N
 */