/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let maxConsLen = 1;
  nums.sort((a, b) => a - b);
  let smlIdx = 0;
  let currLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    if (nums[smlIdx] + currLen === nums[i]) {
      currLen++;
      maxConsLen = Math.max(maxConsLen, currLen);
    } else {
      currLen = 1;
      smlIdx = i;
    }
  }
  return nums.length === 0 ? 0 : maxConsLen;
}
// @lc code=end
// console.clear();
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
// console.log(longestConsecutive([1, 2, 0, 1]));
