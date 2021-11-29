// given an array of integers return if we can create a given sum by adding two integers from the array


const arr: number[] = [1, 3, 4, 11, 2, -1, 5]

const twoNumberSum = (arr: number[], target: number) => {
  const hashMap: {[index: string]: boolean} = {}

  for(let num of arr) {
    // check what is required to make the target sum
    const complement = target - num

    // if the required num exists then return true
    if(hashMap[`${complement}`])
      return true

    hashMap[`${num}`] = true
  }

  return false
}

console.log(twoNumberSum(arr, 10))

/**
 * Time Complexity O(N)
 * Space Complexity O(N)
 */


/**
 * Another solution with Time Complexity O(N*log(N)) and Memory complexity of O(1) would be
 * To sort the array first using the efficient sorting algorithms
 * Then using the two pointer method
 */