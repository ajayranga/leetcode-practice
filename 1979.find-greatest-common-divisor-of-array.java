/*
 * @lc app=leetcode id=1979 lang=java
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start
class Solution {
    public int findGCD(int[] nums) {
        int[] tempArr = findSmallestAndGreatest(nums);
        int sml = tempArr[0];
        int grt = tempArr[1];
        int temp;
        while (grt % sml != 0) {
            temp = sml;
            sml = grt % sml;
            grt = temp;
        }
        return sml;
    }

    public static int[] findSmallestAndGreatest(int[] nums) {
        int grt = nums[0], sml = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > grt) {
                grt = nums[i];
            }
            if (nums[i] < sml) {
                sml = nums[i];
            }
        }
        int[] resArr = { sml, grt };
        return resArr;
    }
}
// @lc code=end
