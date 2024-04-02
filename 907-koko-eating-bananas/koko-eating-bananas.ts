function minEatingSpeed(piles: number[], h: number): number {
  let max = -Infinity,
    min = Infinity;
  piles.forEach((x) => {
    if (x < min) {
      min = x;
    }
    if (x > max) {
      max = x;
    }
  });
  let ans = Infinity;
  let l = 0,
    r = max;
  while (l <= r) {
    let i = Math.floor((l + r) / 2);
    let totalMaxSum = piles.reduce(
      (accu, curr) =>
        (accu +=
          i >= curr ? i : curr % i === 0 ? curr : curr + (i - (curr % i))),
      0
    );

    if (totalMaxSum / i <= h) {
      ans = Math.min(ans, i);
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
  // for (let i = 1; i <= max; i++) {
  //   let totalMaxSum = piles.reduce(
  //     (accu, curr) =>
  //       (accu +=
  //         i >= curr ? i : curr % i === 0 ? curr : curr + (i - (curr % i))),
  //     0
  //   );

  //   if (totalMaxSum / i <= h) {
  //     ans = Math.min(ans, i);
  //   }
  // }
  return ans;
}