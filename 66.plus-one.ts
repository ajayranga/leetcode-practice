/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry === 10) {
      digits[i] = 0;
    } else {
      digits[i] += carry;
      carry = 0;
      break;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
}
// @lc code=end
