// YOUR CODE BELOW
function dogBreeder(name = 'Steve', age = 0) {
    if (typeof arguments[0] === 'number') {
        age = arguments[0]
        name = 'Steve'
    }
    return { name: name, age: age }
}

// console.log(dogBreeder(3))
