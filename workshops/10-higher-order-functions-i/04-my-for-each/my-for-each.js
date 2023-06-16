// YOUR CODE BELOW
function myForEach(arr, myFunc) {
    for (let k = 0; k < arr.length; k++) {
        myFunc(arr[k], k)
    }
}
