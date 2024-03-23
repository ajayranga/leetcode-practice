/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const prefixSum = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  console.log(nums);
  console.log(prefixSum);
  let sbArrSum = prefixSum[prefixSum.length - 1];
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (prefixSum[r] - prefixSum[l] < sbArrSum) {
      l++;
    } else {
      sbArrSum = prefixSum[r] - prefixSum[l];
      r--;
    }
  }
  return sbArrSum;
}
// @lc code=end
