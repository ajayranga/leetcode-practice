/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1;
  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }
  return [l + 1, r + 1];
}
// @lc code=end
