/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let ans = 0;
  for (let n of nums) {
    ans ^= n;
  }
  return ans;
}
// @lc code=end
