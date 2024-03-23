/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const frqObj1 = {},
    frqObj2 = {};
  for (let i = 0, j = 0; i < s.length || j < t.length; i++, j++) {
    if (i < s.length) {
      frqObj1[s[i]] = frqObj1[s[i]] ? ++frqObj1[s[i]] : 1;
    }
    if (j < t.length) {
      frqObj2[t[j]] = frqObj2[t[j]] ? ++frqObj2[t[j]] : 1;
    }
  }
  if (Object.entries(frqObj1).length !== Object.entries(frqObj2).length) {
    return false;
  }
  for (let key in frqObj1) {
    if (frqObj1[key] !== frqObj2[key]) {
      return false;
    }
  }
  return true;
  //   return s.split('').sort().join('') === t.split('').sort().join('');
}
// @lc code=end
