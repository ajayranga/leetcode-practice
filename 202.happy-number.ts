/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const cacheSet = new Set();
  while (!cacheSet.has(n)) {
    cacheSet.add(n);
    let sumDig = 0,
      temp = n;
    while (temp > 0) {
      sumDig += (temp % 10) * (temp % 10);
      temp = ~~(temp / 10);
    }
    n = sumDig;
    if (sumDig === 1) {
      return true;
    }
  }
  return false;
}
// @lc code=end
