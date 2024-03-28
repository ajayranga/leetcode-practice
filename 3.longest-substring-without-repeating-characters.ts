/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) {
    return s.length;
  }
  let l = 0;
  let ans = 0;
  const mySet = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    while (mySet.has(s[i])) {
      mySet.delete(s[l]);
      l++;
    }
    mySet.add(s[i]);
    ans = Math.max(ans, i - l + 1);
  }
  return ans;
}
// @lc code=end
console.clear();
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }
  if (arr.every((itm) => typeof itm === 'number')) {
    return arr;
  }
  let len = arr.length;
  let flattedLvlArr: MultiDimensionalArray = [];
  for (let i = 0; i < len; i++) {
    if (typeof arr[i] === 'number') {
      flattedLvlArr.push(arr[i]);
    } else {
      flattedLvlArr = flattedLvlArr.concat(arr[i]);
    }
  }
  arr = flattedLvlArr;
  return arr;
};
