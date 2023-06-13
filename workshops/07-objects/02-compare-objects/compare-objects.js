function compareObjects(obj1, obj2) {
    let arr1 = Object.keys(obj1)
    let arr2 = Object.keys(obj2)
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
            return false
        }
        if (obj1[arr1[k]] !== obj2[arr2[k]]) {
            return false
        }
    }
    return true
}

console.log(compareObjects({ name: 'nick1' }, { name: 'nick' }))
