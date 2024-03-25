/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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
};