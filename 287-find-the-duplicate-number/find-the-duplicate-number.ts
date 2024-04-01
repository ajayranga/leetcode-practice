function findDuplicate(nums: number[]): number {
    const frqObj = {};
    for (let num of nums) {
        if (frqObj.hasOwnProperty(num)) {
            return num;
        } else {
            frqObj[num] = 1;
        }
    }
};