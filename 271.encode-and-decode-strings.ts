/*
 * @lc app=leetcode id=271 lang=typescript
 *
 * [271] Encode and decode strings
 */

// @lc code=start
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let res = '';
    for (let i = 0; i < strs.length; i++) {
      res += `${strs[i].length}~${strs[i]}`;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    if (str === '') {
      return [];
    }
    const res: string[] = [];
    for (let i = 0; i < str.length - 1; i++) {
      let len = parseInt(str.slice(i));
      let start = i + (len + '').length + 1;
      let end = i + len + (len + '').length + 1;
      console.log({ len, i, start, end, spl: str.slice(start, end) });
      res.push(str.slice(start, end));
      i += len + (len + '').length;
    }
    return res;
  }
}
// @lc code=end
console.clear();
let str: string[] = [
  'The quick brown fox',
  'jumps over the',
  'lazy dog',
  '1234567890',
  'abcdefghijklmnopqrstuvwxyz',
];
let str2: string[] = ['we', 'say', ':', 'yes', '!@#$%^&*()'];

const sol1 = new Solution();
console.log({
  str: str,
  encoded: sol1.encode(str),
  decoded: sol1.decode(sol1.encode(str)),
});

// console.log({
//   str: str2,
//   encoded: sol1.encode(str2),
//   decoded: sol1.decode(sol1.encode(str2)),
// });
