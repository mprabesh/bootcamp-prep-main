// YOUR CODE BELOW
function onlyOdds(num) {
    let oddSum = 0
    if (num < 1) {
        return 0
    }
    for (let k = 1; k <= num; k++) {
        if (k % 2) {
            oddSum += k
        }
    }
    return oddSum
}

onlyOdds(9)
