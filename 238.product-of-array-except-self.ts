/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let prd = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prd *= nums[j];
      }
    }
    ans.push(prd);
  }
  return ans;
}
// @lc code=end
console.clear();
