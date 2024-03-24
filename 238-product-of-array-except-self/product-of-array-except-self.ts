function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [1];
  let prd = 1;
  for (let i = 1; i < nums.length; i++) {
    prd *= nums[i - 1];
    ans.push(prd);
  }
  prd = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    prd *= nums[i + 1];
    ans[i] *= prd;
  }
  return ans;
}