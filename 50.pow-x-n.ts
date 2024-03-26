/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (x == 0 || x === 1) {
    return x;
  }
  if (x === -1) {
    return n % 2 === 0 ? 1 : -1;
  }
  let ans = 1;
  if (n < 0) {
    while (n) {
      ans /= x;
      n++;
      if (ans === 0) {
        return 0;
      }
    }
  } else
    while (n) {
      ans *= x;
      n--;
    }
  return ans;
}
// @lc code=end
