/* 斐波那契数列的递归解法 */

export function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/** 带缓存的递归 */
export function fibonacciWithMemory(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

/** 迭代器 */
export function* fibonacciGenerator(n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }

  yield current;

  yield* fibonacciGenerator(n - 1, next, current + next);
}
