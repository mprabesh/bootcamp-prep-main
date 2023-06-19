// YOUR CODE BELOW
function getDogBreeder(name, age) {
    return function dogBreeder(x, y) {
        if (x === undefined) {
            x = name
        }
        if (y === undefined) {
            y = age
        }
        if (typeof arguments[0] === 'number') {
            y = arguments[0]
            x = name
        }
        return { name: x, age: y }
    }
}

let puppyFarm = getDogBreeder('Rufus', 5)
console.log(puppyFarm('Olaf', 3))
