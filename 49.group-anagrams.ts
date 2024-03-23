/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(str: string[]): string[][] {
  const ans: string[][] = [];
  const ansMap = new Map<string, string[]>();
  for (let i = 0; i < str.length; i++) {
    const freqArr = new Array(26).fill(0);
    for (let j = 0; j < str[i].length; j++) {
      freqArr[str[i].charCodeAt(j) - 97] =
        +freqArr[str[i].charCodeAt(j) - 97] + 1;
    }
    let key = freqArr.join('-');
    if (ansMap.get(key) && ansMap.get(key) !== undefined) {
      ansMap.set(key, ansMap.get(key)!.concat(str[i]));
    } else {
      ansMap.set(key, [str[i]]);
    }
  }
  for (let [_, val] of ansMap) {
    ans.push(val);
  }
  return ans;
}
// @lc code=end
