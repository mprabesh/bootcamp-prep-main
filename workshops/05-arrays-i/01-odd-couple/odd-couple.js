// YOUR CODE BELOW
function oddCouple(arr) {
    let new_arr = []
    let count = 0
    for (let k = 0; k < arr.length; k++) {
        if (count !== 2) {
            if (arr[k] % 2 === 1) {
                new_arr.push(arr[k])
                count++
            }
        }
    }
    return new_arr
}
