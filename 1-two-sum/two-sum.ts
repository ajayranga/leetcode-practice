function twoSum(nums: number[], target: number): number[] {
    const res = new Map<number, number>();
    for (var i = 0; i < nums.length; i++) {
        let requiredNum = target - nums[i];
        if (res.has(requiredNum)) {
            return [res.get(requiredNum), i]
        } else {
            res.set(nums[i], i)
        }
    }
};