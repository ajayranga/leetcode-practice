/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  const ans: number[] = [];
  let curr = 0;

  while (curr !== n + 1) {
    let temp = curr;
    let cnt1s = 0;
    while (temp) {
      if ((temp & 1) === 1) {
        cnt1s++;
      }
      temp = temp >> 1;
    }
    ans.push(cnt1s);
    curr++;
  }
  return ans;
}
// @lc code=end
