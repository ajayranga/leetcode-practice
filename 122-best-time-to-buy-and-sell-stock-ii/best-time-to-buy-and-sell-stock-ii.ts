function maxProfit(prices: number[]): number {
    // if (prices.length === 2) {
    //     if (prices[0] < prices[1]) {
    //         return prices[1] - prices[0];
    //     }
    // }
    let l = 0, r = 1, maxProfit = 0, bought = 0, havBought = false;
    while (r <= prices.length) {
        if (prices[l] < prices[r]) {
            if (!havBought) {
                havBought = true;
                bought = prices[l];
            } 
        } else {
            if (havBought) {
                havBought = false;
                maxProfit += prices[l] - bought;
                bought = 0;
            }
        }
        l++;
        r++;
    }
                if (havBought) {
                    maxProfit += prices[r-1] - bought;
                }
    return maxProfit;
};