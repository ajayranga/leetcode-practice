/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [1];
  let prd = 1;
  for (let i = 1; i < nums.length; i++) {
    prd *= nums[i - 1];
    ans.push(prd);
  }
  prd = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    prd *= nums[i + 1];
    ans[i] *= prd;
  }
  return ans;
}
// @lc code=end
