function removeElement(nums: number[], val: number): number {
    let cnt=nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
            --i;
            cnt--;
        }
    }
    return cnt;
};