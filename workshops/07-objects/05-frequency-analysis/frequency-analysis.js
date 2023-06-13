// YOUR CODE BELOW
function frequencyAnalysis(stringVal) {
    let finalObj = {}
    for (let k = 0; k < stringVal.length; k++) {
        if (stringVal[k] in finalObj) {
            finalObj[stringVal[k]] = finalObj[stringVal[k]] + 1
        } else {
            finalObj[stringVal[k]] = 1
        }
    }
    console.log(finalObj)
    return finalObj
}

frequencyAnalysis('abca')
