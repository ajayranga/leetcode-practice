/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  let ans = 0;
  while (n) {
    if ((n & 1) === 1) {
      ans++;
    }
    n = n >> 1;
  }
  return ans;
}
// @lc code=end
