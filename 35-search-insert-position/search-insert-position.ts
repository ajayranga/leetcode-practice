function searchInsert(nums: number[], target: number): number {
    let l = 0, r = nums.length;
    let mid = 0;
    while (l <= r) {
        mid = ~~((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    if (mid === nums.length ) {
        return mid;
    }
    return nums[mid] > target ? mid : mid + 1;
};

// 0,2,1
// 0,1,0
// 1,1,0
// 1,0,0