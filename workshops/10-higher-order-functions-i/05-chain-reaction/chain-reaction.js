// YOUR CODE BELOW
function chainReaction(startVal, arrFunc) {
    let finalVal = startVal
    for (let k = 0; k < arrFunc.length; k++) {
        finalVal = arrFunc[k](finalVal)
        console.log(finalVal)
    }
    // console.log(finalVal)
    return finalVal
}
// function addTen(num) {
//     return num + 10
// }

// function subtractFive(num) {
//     return num - 5
// }

// function multiplyFive(num) {
//     return num * 5
// }
chainReaction(10, [addTen, subtractFive, multiplyFive])
