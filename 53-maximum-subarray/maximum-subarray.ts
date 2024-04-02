const maxSubArray = (arr) => {
    let ans = -Infinity;
    let minSum = 0;
    if (arr.length < 1) {
        return 0;
    }
    let prefixSum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    let l = 0,
        r = arr.length - 1;
    ans = prefixSum[r];
    while (l <= r) {
        ans = Math.max(ans, prefixSum[l] - minSum);
        minSum = Math.min(minSum, prefixSum[l])
        l++;
    }
    return ans;
};