function zooInventory(arr) {
    let final_arr = []
    for (let k = 0; k < arr.length; k++) {
        let element = arr[k]
        let new_string = `${element[0]} the ${element[1][0]} is ${element[1][1]}.`
        final_arr.push(new_string)
    }
    return final_arr
}
