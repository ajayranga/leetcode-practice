/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const arr = nums.sort((a, b) => a - b);
  const ans: number[][] = [];
  let l = 0,
    r = arr.length - 1;
  const frstSet = new Set();
  while (l < r) {
    if (frstSet.has(arr[l])) {
      l++;
      continue;
    }
    frstSet.add(arr[l]);
    let sum = -arr[l];
    let left = l + 1;
    let right = r;
    let secSet = new Set();
    while (left < right) {
      if (secSet.has(arr[left])) {
        left++;
        continue;
      }
      if (arr[left] + arr[right] === sum) {
        secSet.add(arr[left]);
        ans.push([arr[l], arr[left], arr[right]]);
        left++;
        right = r;
      } else if (arr[left] + arr[right] > sum) {
        --right;
      } else left++;
    }
    l++;
  }
  return ans;
}

// @lc code=end

console.clear();
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
