/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let ans = 0,
    count = 0;

  for (let n of nums) {
    if (count === 0) {
      ans = n;
    }
    if (ans === n) count++;
    else count--;
  }
  return ans;
}
// @lc code=end
