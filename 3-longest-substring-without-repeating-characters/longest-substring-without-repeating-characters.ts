function lengthOfLongestSubstring(s: string): number {
    let l = 0,
        r = 1;
    let ans = 0;
    while (r <= s.length) {
        if (r - l === new Set(s.slice(l, r)).size) {
            ans = Math.max(ans, r - l);
            r++;
        } else {
            l++;
        }
    }
    return ans;
}