// YOUR CODE BELOW
function finderFunction(arr, myFunc) {
    for (let k = 0; k < arr.length; k++) {
        if (myFunc(arr[k])) {
            return k
        }
    }
    return -1
}

function myFunc(val) {
    if (val === 'prabesh') {
        return true
    }
    return false
}
