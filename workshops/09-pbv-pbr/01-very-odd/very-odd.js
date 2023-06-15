// YOUR CODE BELOW
function veryOdd(arr) {
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            oddArr.push(arr[i])
        }
    }
    return oddArr
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8]
let oddNums = veryOdd(allTheNums)
