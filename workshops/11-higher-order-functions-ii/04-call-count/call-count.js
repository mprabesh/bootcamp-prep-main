// YOUR CODE BELOW
function callCount() {
    let count = 0
    return function () {
        count++
        // console.log('Hello world', count)
        return count
    }
}

let newFunction1 = callCount()
let newFunction2 = callCount()
newFunction1()
newFunction2()
newFunction1()
// console.log(newFunction2())
