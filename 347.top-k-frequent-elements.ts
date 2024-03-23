/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const ans: number[] = [];
  const frqMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    frqMap.set(nums[i], frqMap.get(nums[i]) ? frqMap.get(nums[i])! + 1 : 1);
  }
  const frqArr = Array.from(frqMap);
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < frqArr.length; j++) {
      if (frqArr[i][1] < frqArr[j][1]) {
        let temp = frqArr[i];
        frqArr[i] = frqArr[j];
        frqArr[j] = temp;
      }
    }
    ans.push(frqArr[i][0]);
  }
  return ans;
}
// @lc code=end
