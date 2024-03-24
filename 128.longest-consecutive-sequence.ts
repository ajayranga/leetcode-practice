/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let maxConsLen = 0;
  const numSet = new Set(nums);
  for (let n of numSet) {
    if (!numSet.has(n - 1)) {
      let y = n++;
      while (numSet.has(y)) {
        y++;
      }
      maxConsLen = Math.max(maxConsLen, y - n + 1);
    }
  }
  return maxConsLen;
}
// @lc code=end
console.clear();
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
console.log(longestConsecutive([1, 2, 0, 1]));
