function mySlice(originalArr, startIdx, endIdx) {
    if (startIdx === undefined) {
        startIdx = 0
    }
    if (endIdx === undefined) {
        endIdx = originalArr.length
    }
    if (startIdx < 0) {
        startIdx = originalArr.length + startIdx
    }
    if (endIdx < 0) {
        endIdx = originalArr.length + endIdx
    }
    let new_arr = []
    for (let k = startIdx; k < endIdx; k++) {
        new_arr.push(originalArr[k])
    }
    return new_arr
}

// mySlice([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 6)
mySlice([1, 2, 3]) // => [2]
mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 1, 3)
