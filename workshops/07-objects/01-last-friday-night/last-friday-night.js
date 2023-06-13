let transactions = [
    {
        name: 'Tons of glitter',
        amount: 70,
    },
    {
        name: 'Porcelain Pink Flamingos',
        amount: 92,
    },
    {
        name: 'Chandelier replacement',
        amount: 10000,
    },
    {
        name: 'Dinner at TGIF x6',
        amount: 350,
    },
]
function lastFridayNight(arr1) {
    let total_sum = 0
    for (let k = 0; k < arr1.length; k++) {
        total_sum = total_sum + arr1[k].amount
    }
    console.log(total_sum)
    return total_sum
}

lastFridayNight(transactions)
