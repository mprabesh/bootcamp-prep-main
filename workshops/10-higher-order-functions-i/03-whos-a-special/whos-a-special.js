// YOUR CODE BELOW
let new_val = []
function whosASpecial(arrPets) {
    let new_string = ''
    while (new_val.length) {
        new_val.pop()
    }
    arrPets.forEach(mySpecial)

    for (let k = 0; k < new_val.length; k++) {
        if (k !== new_val.length - 1) {
            new_string = new_string + new_val[k] + ' '
        } else {
            new_string = new_string + new_val[k]
        }
    }

    console.log(new_string)
    return new_string
}

function mySpecial(objP) {
    let specialString = ''
    let name = objP['name']
    let species = objP['species']
    specialString = `${name} the ${species} is very special!`
    new_val.push(specialString)
}

let specialPets = [
    {
        name: 'Mr. Binns',
        species: 'cat',
    },
    {
        name: 'Pusheen',
        species: 'cat',
    },
]
whosASpecial(specialPets)
