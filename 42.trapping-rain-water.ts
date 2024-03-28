/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(arr: number[]): number {
  let ans = 0;
  const maxLeftArr: number[] = [];
  const maxRightArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    maxLeftArr[i] = Math.max(maxLeftArr[i - 1] ?? 0, arr[i]);
    maxRightArr[arr.length - i - 1] = Math.max(
      maxRightArr[arr.length - i] ?? 0,
      arr[arr.length - i - 1]
    );
  }
  for (let i = 0; i < arr.length; i++) {
    let sum = Math.min(maxLeftArr[i], maxRightArr[i]) - arr[i];
    if (sum > 0) {
      ans += sum;
    }
  }
  return ans;
}
// @lc code=end
console.clear();
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
