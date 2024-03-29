function maxSubarrayLength(nums: number[], k: number): number {
    let ans = 0;
    let frqMap = new Map<number, number>();
    let l = 0;
    for (let i = 0; i < nums.length; i++) {
        if (frqMap.has(nums[i])) {
            frqMap.set(nums[i], frqMap.get(nums[i]) + 1)
            while (frqMap.get(nums[i]) > k) {
                frqMap.set(nums[l], frqMap.get(nums[l]) - 1)
                l++;
            }
        } else {
            frqMap.set(nums[i], 1)
        }
        ans = Math.max(ans, i - l + 1)
    }
    return ans;
};