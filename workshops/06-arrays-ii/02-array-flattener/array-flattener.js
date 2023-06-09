function arrayFlattener(arr) {
    let new_arr = []
    for (let k = 0; k < arr.length; k++) {
        let element = arr[k]
        if (Array.isArray(element)) {
            for (let i = 0; i < element.length; i++) {
                new_arr.push(element[i])
            }
        } else {
            new_arr.push(element)
        }
    }
    return new_arr
}

console.log(arrayFlattener([1, [2, 3], 4]))
