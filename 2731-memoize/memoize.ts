type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cacheMap = new Map();
    return function (...args) {
        const caller = JSON.stringify(args)
        if (!cacheMap.has(caller)) {
            cacheMap.set(caller, fn(...args))
        }
        return cacheMap.get(caller)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */