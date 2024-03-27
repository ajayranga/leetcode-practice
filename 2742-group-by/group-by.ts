declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    const ans = {};
    for (let i = 0; i < this.length; i++) {
        let resCal = fn(this[i]);
        if(!ans[resCal]){
            ans[resCal]=[]
        }
        ans[resCal].push(this[i])  
    }
    return ans;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */