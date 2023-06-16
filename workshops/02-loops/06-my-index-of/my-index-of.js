// YOUR CODE BELOW
function myIndexOf(source, searchVal, startIdx = 0) {
    const search_length = searchVal.length
    for (let i = startIdx; i <= source.length; i++) {
        if (source[i] === searchVal[0]) {
            let x = source.slice(i, i + search_length)
            if (x === searchVal) {
                return i
            }
            return -1
        }
    }
}
