/**
 * Find the nth fibonacci number
 * 0 1 1 2 3 5 8 13 21 34 55
 */

/**
 * so nth fibonacci number is fib(n) = fib(n-1) + fib(n-2)
 * if n = 1 then fib(1) is simply 0
 * if n = 2 then fib(2) is 1
 * so fib(3) = fib(2) + fib(1) = 1 + 0 = 1
 * also fib(4) = fib(3) + fib(2) => fib(2) + fib(1) + fib(2) = 1 + 0 + 1 = 2
 * 
 * so n can be broken down to the level of base cases
 */

// find 45th fibonacci and see the amount of time it takes
const fibonacci1 = (n: number) => {
  if(n === 2)
    return 1
  else if(n === 1)
    return 0
  else
    return fibonacci1(n - 1) + fibonacci1(n - 2)
}

/**
 * The problem with previous implementation was that we were recalculating sums that we already calculated
 * for example fib(8) = fib(7) + fib(6) => fib(6) + fib(5) + fib(6)
 * now fib(6) will be calculated once and if we store the value we can reuse it
 **/
const fibonacci2 = (n: number, hashMap = {}) => {
  if(n === 2)
    return 1
  if(n === 1)
    return 0

  if(hashMap[`${n}`])
    return hashMap[`${n}`]

  hashMap[`${n}`] = fibonacci2(n - 1, hashMap) + fibonacci2(n - 2, hashMap)
  return hashMap[`${n}`]
}

// console.log(fibonacci1(45))
// console.log(fibonacci2(100))