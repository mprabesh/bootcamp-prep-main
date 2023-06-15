// YOUR CODE BELOW
function deeperCopy(arr) {
    let new_arr = []
    for (let k = 0; k < arr.length; k++) {
        if (Array.isArray(arr[k])) {
            let temp_arr = []
            for (let j = 0; j < arr[k].length; j++) {
                // console.log(arr[k][j])
                temp_arr.push(arr[k][j])
            }
            new_arr.push(temp_arr)
        } else {
            new_arr.push(arr[k])
        }
        // new_arr.push(arr[k])
    }
    return new_arr
}
// let myArray = [1, [2, 3]]
// deeperCopy(myArray)
