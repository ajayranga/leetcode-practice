function longestConsecutive(nums: number[]): number {
  let maxConsLen = 0;
  const numSet = new Set(nums);
  for (let n of numSet) {
    if (!numSet.has(n - 1)) {
      let y = n++;
      while (numSet.has(y)) {
        y++;
      }
      maxConsLen = Math.max(maxConsLen, y - n + 1);
    }
  }
  return maxConsLen;
}