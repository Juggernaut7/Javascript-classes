// if a 2gb monthly data on    MTN network cost 2500 in 2024. then, in 2025 the same worth of gb cost 9000. create a js function to calculate and console the percentage increase in price of the data.


function percentageIncrease(oldPrice, newPrice) {
   
    return ((newPrice - oldPrice) / oldPrice) * 100;
}

console.log(percentageIncrease(2500, 9000) + "%");