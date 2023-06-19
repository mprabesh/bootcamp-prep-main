// YOUR CODE BELOW
function partial(myCallback, para) {
    return function (num) {
        return myCallback(para, num)
    }
}

function myFunc(para, num) {
    return para, num
}

// let apple = partial(myFunc, 8)
// console.log(apple(1))
