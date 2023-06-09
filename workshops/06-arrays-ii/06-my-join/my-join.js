function myJoin(arr, separator) {
    if (separator === undefined) {
        separator = ','
    }
    let final_string = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] === null) {
            arr[i] = ''
        }
        final_string = final_string + arr[i]
        if (i !== arr.length - 1) {
            final_string = final_string + separator
        }
    }
    console.log(final_string)
    return final_string
}

myJoin(['hello', null, 'world'], '-')
