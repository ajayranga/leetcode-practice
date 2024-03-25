/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let ans = 0;
  let l = 0,
    r = 1;
  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l++;
      r = l + 1;
    } else {
      ans = Math.max(ans, prices[r] - prices[l]);
      r++;
    }
  }
  return ans;
}
// @lc code=end
