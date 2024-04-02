function longestCommonPrefix(strs: string[]): string {
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let l = 0, r = Math.min(ans.length, strs[i].length);
        let temp = "";
        while (strs[i][l] === ans[l] && l < r) {
            temp += strs[i][l];
            l++;
        }
        ans = temp
    }
    return ans;
};