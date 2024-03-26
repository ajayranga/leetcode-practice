function majorityElement(nums: number[]): number {
    let ans = 0,
        count = 0;

    for (let n of nums) {
        if (count === 0) {
            ans = n;
        }
        if (ans === n) count++;
        else count--;
    }
    return ans;
}