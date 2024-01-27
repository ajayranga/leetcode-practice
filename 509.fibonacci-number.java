/*
 * @lc app=leetcode id=509 lang=java
 *
 * [509] Fibonacci Number
 */

// @lc code=start
class Solution {
    public int fib(int n) {
        int fs = 0, sec = 1;
        int third = 0;
        if (n == 1) {
            return 1;
        }
        for (int i = 1; i < n; i++) {
            third = fs + sec;
            fs = sec;
            sec = third;
        }
        return third;
    }
}
// @lc code=end
