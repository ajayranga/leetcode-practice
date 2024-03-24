function singleNumber(nums: number[]): number {
    const frqObj = {};
    for (let n of nums) {
        frqObj[n] = frqObj[n] ? frqObj[n] + 1 : 1;
    }
    for(let key in frqObj){
        if(frqObj[key]===1){
            return +key;
        }
    }
    return 0
};