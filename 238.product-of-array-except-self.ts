/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = [];
  const suffix: number[] = [];
  let prd1 = 1,
    prd2 = 1;
  for (let i = 0; i < nums.length; i++) {
    prd1 *= nums[i];
    prefix.push(prd1);
    prd2 *= nums[nums.length - i - 1];
    suffix.unshift(prd2);
  }
  return prefix.map((_, idx) =>
    idx === 0
      ? suffix[1]
      : idx === prefix.length - 1
      ? prefix[prefix.length - 2]
      : prefix[idx - 1] * suffix[idx + 1]
  );
}
// @lc code=end
