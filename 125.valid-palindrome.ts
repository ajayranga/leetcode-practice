/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  //   const allAlphabetsSet = new Set(
  //     'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
  //   );
  //   let alphabeticStr = '';
  //   for (let i = 0; i < s.length; i++) {
  //     if (allAlphabetsSet.has(s[i].toLowerCase())) {
  //       alphabeticStr += s[i].toLowerCase();
  //     }
  //   }
  //   for (let i = 0; i < alphabeticStr.length; i++) {
  //     if (alphabeticStr[i] !== alphabeticStr[alphabeticStr.length - i - 1]) {
  //       return false;
  //     }
  //   }
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (!isLetterOrDigit(s[l])) {
      l++;
      continue;
    }
    if (!isLetterOrDigit(s[r])) {
      r--;
      continue;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}
const isLetterOrDigit = (ch: string) => {
  const charCode = ch.toLowerCase().charCodeAt(0);
  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }
  return false;
};
// @lc code=end
