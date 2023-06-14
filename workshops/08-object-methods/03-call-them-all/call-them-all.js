// YOUR CODE BELOW
function callThemAll(obj1, val) {
    let finalArr = []
    for (keys in obj1) {
        if (typeof obj1[keys] === 'function') {
            let objFunc = obj1[keys]
            let result = objFunc(val)
            finalArr.push(result)
        }
    }
    console.log(finalArr)
    return finalArr
}

let addsNums = {
    addTen: function (num) {
        return num + 10
    },

    addTwenty: function (num) {
        return num + 20
    },

    someProperty: 'value',
}
callThemAll(addsNums, 100)
