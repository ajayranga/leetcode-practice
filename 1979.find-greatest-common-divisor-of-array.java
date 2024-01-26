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

    public static int[] findSmallestAndGreatest(int[] arr) {
        int grt = arr[0], sml = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > grt) {
                grt = arr[i];
            }
            if (arr[i] < sml) {
                sml = arr[i];
            }
        }
        int[] resArr = { sml, grt };
        return resArr;
    }
}
// @lc code=end
