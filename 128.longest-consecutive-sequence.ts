/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let maxConsLen = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let currLen = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        i++;
        continue;
      }
      if (nums[i] === nums[j] - 1) {
        currLen++;
        i++;
      } else {
        i = --j;
        break;
      }
    }
    maxConsLen = Math.max(maxConsLen, currLen);
  }
  return maxConsLen;
}
// @lc code=end
// console.clear();
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
