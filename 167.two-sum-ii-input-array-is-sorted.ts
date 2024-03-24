/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  const ans: number[] = [];
  const searchMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const numbToFind = target - numbers[i];
    if (searchMap.has(numbToFind)) {
      return [searchMap.get(numbToFind), i + 1];
    } else {
      searchMap.set(numbers[i], i + 1);
    }
  }
  return ans;
}
// @lc code=end
