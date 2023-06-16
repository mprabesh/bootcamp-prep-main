// YOUR CODE BELOW
function whosASpecial(arrPets) {
    let animalArray = []
    let new_string = ''
    arrPets.forEach(function (para) {
        let animal = para['name']
        let species = para['species']
        let specialString = `${animal} the ${species} is very special!`
        animalArray.push(specialString)
    })
    new_string = animalArray.join(' ')
    console.log(new_string)
    return new_string
}
