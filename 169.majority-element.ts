/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let ans = 0;
  const frqObj: { [k: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    frqObj[nums[i]] = frqObj[nums[i]] ? ++frqObj[nums[i]] : 1;
  }
  for (let key in frqObj) {
    if (frqObj[key] > ans) {
      ans = +key;
    }
  }
  return ans;
}
// @lc code=end
console.clear();
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
