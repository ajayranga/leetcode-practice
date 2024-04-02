/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // for (let i = 0; i < k % nums.length; i++)
    //     nums.unshift(nums.pop())
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k % nums.length - 1)
    reverse(nums, k % nums.length, nums.length - 1)
};
const reverse = (arr: number[], start: number, end: number) => {
    while (start < end) {
        arr[start] = arr[start] + arr[end]
        arr[end] = arr[start] - arr[end]
        arr[start] = arr[start] - arr[end]
        start++;
        end--;
    }
}

// [1,2,3,4,5,6,7]
// [7,6,5,4,3,2,1]
// [5,6,7,4,3,2,1]
// [5,6,7,4,3,2,1]
