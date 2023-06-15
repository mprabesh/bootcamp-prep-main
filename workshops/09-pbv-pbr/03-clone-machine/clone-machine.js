// YOUR CODE BELOW
function cloneMachine(animalObj) {
    let cloneObj = {
        name: animalObj['name'] + 'Clone',
        species: animalObj['species'],
        offspring: [],
    }
    animalObj['offspring'].push(cloneObj['name'])

    return cloneObj
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: [],
}
console.log(cloneMachine(dolly))

console.log(dolly)
