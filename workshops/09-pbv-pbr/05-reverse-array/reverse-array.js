// YOUR CODE BELOW
function reverseArray(arr) {
    let new_array = []
    let length = arr.length - 1
    for (let k = length; k >= 0; k--) {
        new_array.push(arr[k])
    }
    while (arr.length) {
        arr.pop()
    }
    console.log(arr)
    for (let j = 0; j < new_array.length; j++) {
        arr.push(new_array[j])
    }
    return arr
}

let myArray = [1, 2, 3, 4]
reverseArray(myArray)
console.log(myArray)
