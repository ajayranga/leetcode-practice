function maxArea(height: number[]): number {
    let ans = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return ans;
};