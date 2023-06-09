function myLastIndexOf(arr, searchVal, startIdx) {
    if (startIdx === undefined) {
        startIdx = arr.length - 1
    }
    for (let i = startIdx; i >= 0; i--) {
        if (arr[i] === searchVal) {
            return i
        }
    }
    return -1
}
