function evenAndOdd(arr) {
    let even_arr = []
    let odd_arr = []
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] % 2) {
            even_arr.push(arr[k])
        } else {
            odd_arr.push(arr[k])
        }
    }
    return [odd_arr, even_arr]
}

evenAndOdd([1, 14, 15, 16, 9])
