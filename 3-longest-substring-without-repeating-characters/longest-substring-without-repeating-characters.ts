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