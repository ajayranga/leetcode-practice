type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return (await promise1)+(await promise2);
    // return new Promise((resolve) => {
    //     Promise.allSettled([promise1, promise2]).then(result => {
    //         let ans: number = 0;
    //         result.forEach(res => ans += res.value);
    //         resolve(ans)
    //     })

    // })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */