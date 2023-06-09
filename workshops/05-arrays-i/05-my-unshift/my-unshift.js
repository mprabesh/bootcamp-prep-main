function myUnshift(arr, val) {
    let new_arr = [val]
    for (let k = 0; k < arr.length; k++) {
        new_arr.push(arr[k])
    }
    return new_arr
}
