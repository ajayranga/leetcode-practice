function hammingWeight(n: number): number {
    let ans = 0;
    while (n) {
        if ((n & 1) === 1) {
            ans++;
        }
        n = n >> 1;
    }
    return ans;
}