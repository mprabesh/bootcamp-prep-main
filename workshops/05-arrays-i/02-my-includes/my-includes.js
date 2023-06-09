function myIncludes(arr, searcVal) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === searcVal) {
            return true
        }
    }
    return false
}
