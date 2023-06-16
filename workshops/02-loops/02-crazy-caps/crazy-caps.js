// YOUR CODE BELOW
function crazyCaps(stringVal) {
    let newString = ''
    for (let k = 0; k < stringVal.length; k++) {
        let changedChar = ''
        if (k % 2) {
            changedChar = stringVal[k].toUpperCase()
            newString += changedChar
        } else {
            changedChar = stringVal[k].toLowerCase()
            newString += changedChar
        }
    }
    console.log(newString)
    return newString
}

crazyCaps('fullstack is amazing')
