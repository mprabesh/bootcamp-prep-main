// YOUR CODE BELOW
function stringify(myCallback) {
    return function () {
        let x = myCallback()
        x = String(x)
        return x
    }
}

function returnsBoolean() {
    return true
}

let a = stringify(returnsBoolean)
console.log(typeof a())
